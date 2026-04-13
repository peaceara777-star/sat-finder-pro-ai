/**
 * مثال: دالة وهمية لمحاكاة البوصلة
 * استبدلها بدالة البوصلة الحقيقية عندك.
 */
const compass = {
    startCompass(cb) {
        let heading = 0;
        let moonAzimuth = 130; // مثال ثابت
        setInterval(() => {
            heading = (heading + 2) % 360;
            const diffRaw = Math.abs(heading - moonAzimuth);
            const diff = diffRaw > 180 ? 360 - diffRaw : diffRaw;
            cb({
                heading,
                moonAzimuth,
                diff
            });
        }, 80);
    }
};

const headingValue = document.getElementById("headingValue");
const moonAzimuthSpan = document.getElementById("moonAzimuth");
const diffValue = document.getElementById("diffValue");

const compassNeedle = document.getElementById("compassNeedle");
const needleReflection = document.getElementById("needleReflection");
const pulseEffect = document.getElementById("pulseEffect");
const compassGlow = document.getElementById("compassGlow");

const soundRadar = document.getElementById("soundRadar");

let lastFeedbackTime = 0;

function playSound(sound) {
    sound.currentTime = 0;
    sound.play().catch(()=>{});
}

compass.startCompass((data) => {
    const heading = data.heading;
    const moonAzimuth = data.moonAzimuth;
    const diff = data.diff;

    headingValue.textContent = `${heading.toFixed(0)}°`;
    moonAzimuthSpan.textContent = `${moonAzimuth.toFixed(0)}°`;
    diffValue.textContent = `${diff.toFixed(0)}°`;

    // دوران الإبرة
    compassNeedle.style.transform =
        `translate(-50%, -85%) rotate(${heading}deg)`;

    // دوران الانعكاس مع الإبرة
    needleReflection.style.transform =
        `translateX(-50%) rotate(${heading}deg)`;

    // Pulse عند الاقتراب الشديد
    const isAligned = diff < 8;
    if (isAligned) {
        pulseEffect.classList.add("pulse-active");
        pulseEffect.style.opacity = "1";
    } else {
        pulseEffect.classList.remove("pulse-active");
        pulseEffect.style.opacity = "0";
    }

    // توهج Cyan Neon حسب الاقتراب
    const normalized = Math.min(diff, 30) / 30;
    const intensity = 1 - normalized;
    compassGlow.style.opacity = intensity * 0.9;

    // تسريع صوت الرادار + اهتزاز حسب الاقتراب
    const minCooldown = 250;
    const maxCooldown = 1500;
    const cooldown = maxCooldown - (intensity * (maxCooldown - minCooldown));

    const now = Date.now();
    if (now - lastFeedbackTime > cooldown) {
        // صوت الرادار
        playSound(soundRadar);

        // اهتزاز متدرج
        if (navigator.vibrate) {
            const vib = 40 + (intensity * 120);
            navigator.vibrate(vib);
        }

        lastFeedbackTime = now;
    }
});
