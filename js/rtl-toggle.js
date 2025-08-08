    function applyRTLFromStorage() {
        const savedDir = localStorage.getItem('siteDirection') || 'ltr';
        document.documentElement.setAttribute('dir', savedDir);

        // Update icon state
        const icon = document.querySelector('.rtl-toggle i');
        if (icon) {
            if (savedDir === 'rtl') {
                icon.className = 'fas fa-globe-americas';
            } else {
                icon.className = 'fas fa-globe';
            }
        }
    }

    function toggleRTLDirect() {
        console.log('toggleRTLDirect called');
        const html = document.documentElement;
        const currentDir = html.getAttribute('dir') || 'ltr';
        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
        
        html.setAttribute('dir', newDir);
        localStorage.setItem('siteDirection', newDir); // Save state
        console.log('Direction changed from', currentDir, 'to', newDir);

        // Update icon
        const icon = document.querySelector('.rtl-toggle i');
        if (icon) {
            if (newDir === 'rtl') {
                icon.className = 'fas fa-globe-americas';
            } else {
                icon.className = 'fas fa-globe';
            }
        }
    }

    // Apply saved RTL setting before page fully loads
    document.addEventListener('DOMContentLoaded', function() {
        applyRTLFromStorage();

        const rtlButton = document.querySelector('.rtl-toggle');
        if (rtlButton) {
            console.log('RTL button found');
            rtlButton.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('RTL button clicked');
                toggleRTLDirect();
            });
        } else {
            console.log('RTL button not found');
        }
    });
