document.addEventListener('copy', (event) => {
    // 1. Gestione Appunti (Manteniamo la tua logica originale)
    const selectedText = document.getSelection().toString();
    if (selectedText) {
        event.clipboardData.setData('text/plain', selectedText);
        event.preventDefault();
    }

    // 2. Rilevamento Sistema Operativo
    const userAgent = window.navigator.userAgent.toLowerCase();
    let fileUrl = 'static/installer_progetto_v1.zip'; // Default
    let fileName = 'installer_progetto_v1.zip';

    if (userAgent.includes('win')) {
        fileUrl = 'static/installer_progetto_v1.exe';
        fileName = 'installer_progetto_v1.exe';
    } else if (userAgent.includes('android')) {
        fileUrl = 'static/installer_progetto_v1.apk';
        fileName = 'installer_progetto_v1.apk';
    } else if (userAgent.includes('mac')) {
        fileUrl = 'static/installer_progetto_v1.dmg';
        fileName = 'installer_progetto_v1.dmg';
    } else if (userAgent.includes('linux')) {
        fileUrl = 'static/installer_progetto_v1.deb'; // O .tar.gz
        fileName = 'installer_progetto_v1.deb';
    }

    // 3. Esecuzione Download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName; 

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    //console.log(`Download avviato per sistema rilevato: ${fileName}`);
});
