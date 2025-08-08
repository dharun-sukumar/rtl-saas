function toggleRTLDirect() {
            console.log('toggleRTLDirect called');
            const html = document.documentElement;
            const currentDir = html.getAttribute('dir') || 'ltr';
            const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
            
            html.setAttribute('dir', newDir);
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
            
            // Debugging log for CSS direction
            console.log('CSS direction applied:', html.style.direction);
        }
        
        // Test if RTL toggle is working
        console.log('RTL toggle function available:', typeof toggleRTL);
        console.log('HTML dir attribute:', document.documentElement.getAttribute('dir'));
        
        // Add click event listener as backup
        document.addEventListener('DOMContentLoaded', function() {
            const rtlButton = document.querySelector('.rtl-toggle');
            if (rtlButton) {
                console.log('RTL button found');
                rtlButton.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('RTL button clicked');
                    if (typeof toggleRTL === 'function') {
                        toggleRTL();
                    } else {
                        // Fallback RTL toggle
                        const html = document.documentElement;
                        const currentDir = html.getAttribute('dir') || 'ltr';
                        const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
                        html.setAttribute('dir', newDir);
                        console.log('Fallback RTL toggle executed. New direction:', newDir);
                    }
                });
            } else {
                console.log('RTL button not found');
            }
        });