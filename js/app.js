function switchView(viewId) {
    // 1. Hide all views
    document.querySelectorAll('.view-content').forEach(view => {
        view.classList.remove('active');
    });

    // 2. Remove active state from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // 3. Show the selected view
    const selectedView = document.getElementById(`view-${viewId}`);
    if (selectedView) {
        selectedView.classList.add('active');
    }

    // 4. Highlight the selected nav link
    const selectedLink = document.querySelector(`[data-view="${viewId}"]`);
    if (selectedLink) {
        selectedLink.classList.add('active');
    }
}

// Keep your existing init(), toggle(), and updateDiagnostics() functions below...
