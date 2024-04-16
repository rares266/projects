// Verificăm dacă utilizatorul este pe un dispozitiv mobil
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Adăugăm o clasă 'mobile' la elementul HTML dacă utilizatorul este pe un dispozitiv mobil
if (isMobileDevice()) {
    document.documentElement.classList.add('mobile');
}

