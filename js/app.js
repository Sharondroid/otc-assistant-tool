function switchView(viewId) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.view-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove active state from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show the target section
    const targetSection = document.getElementById(`view-${viewId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 4. Highlight the target nav link
    const targetLink = document.querySelector(`[data-view="${viewId}"]`);
    if (targetLink) {
        targetLink.classList.add('active');
    }
}
