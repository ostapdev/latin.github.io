// Social media links configuration
const socialLinks = [
    { icon: 'fab fa-instagram', url: 'https://instagram.com/yourusername' },
    { icon: 'fab fa-facebook', url: 'https://facebook.com/yourusername' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/ostap-/' },
    { icon: 'far fa-envelope', url: 'mailto:ostap.baraniak@yahoo.com' }
];

// Main links configuration
const mainLinks = [
    {
        title: 'Linkedin',
        url: 'https://www.linkedin.com/in/ostap-/',
        icon: 'fab fa-linkedin',
        iconColor: '#0088cc'
    },
    {
        title: 'Email',
        url: '#',
        icon: 'far fa-envelope',
        iconColor: '#333333'
    },
    {
        title: 'YouTube',
        url: 'https://www.youtube.com/@ostapbaraniak',
        icon: 'fab fa-youtube',
        iconColor: '#FF0000'
    },
    {
        title: 'Biography',
        url: 'https://www.notion.so/ostap-baraniak/Biography/',
        icon: 'fas fa-building',
        iconColor: '#2b2b2b'
    },
    {
        title: 'Sale',
        url: 'https://www.notion.so/ostap-baraniak/Sale/',
        icon: 'fas fa-tag',
        iconColor: '#ff4444'
    },
];

// Function to render social icons
function renderSocialIcons() {
    const socialIconsContainer = document.getElementById('socialIcons');
    socialIconsContainer.innerHTML = socialLinks
        .map(link => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                <i class="${link.icon}"></i>
            </a>
        `)
        .join('');
}

// Function to render main links
function renderMainLinks() {
    const linksContainer = document.getElementById('linksSection');
    linksContainer.innerHTML = mainLinks
        .map(link => `
            <a href="${link.url}" class="link-card" target="_blank" rel="noopener noreferrer">
                <div class="link-content">
                    <div class="link-icon">
                        <i class="${link.icon}" style="color: ${link.iconColor}"></i>
                    </div>
                    <span>${link.title}</span>
                </div>
                <i class="fas fa-ellipsis-v"></i>
            </a>
        `)
        .join('');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderSocialIcons();
    renderMainLinks();
}); 