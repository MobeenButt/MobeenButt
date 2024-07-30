
    document.addEventListener('DOMContentLoaded', function () {
      let profileViews = localStorage.getItem('profileViews') || 0;
      profileViews++;
      localStorage.setItem('profileViews', profileViews);
      document.getElementById('profile-views').textContent = profileViews;
    });
  
