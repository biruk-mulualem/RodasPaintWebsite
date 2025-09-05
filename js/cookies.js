<script>

  function setCookie(name, value, days) {
    try {
      const expires = new Date(Date.now() + days * 86400000).toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/";
    } catch (e) {
    console.error("Failed to set cookie:", e);
    }
  }

  function getCookie(name) {
  try {
    const escapedName = name.replace(/([.*+?^${ }()|[\]\\])/g, '\\$1');
  const regex = new RegExp('(?:^|; )' + escapedName + '=([^;]*)');
  const match = document.cookie.match(regex);
  return match ? decodeURIComponent(match[1]) : null;
  } catch (e) {
    console.error("Failed to get cookie:", e);
  return null;
  }
}

  const currentPage = window.location.pathname;
  const now = new Date().toISOString();

  let activityLog = [];

  try {
    const activity = getCookie("userActivity");

  if (activity) {
    activityLog = JSON.parse(activity);
  if (!Array.isArray(activityLog)) activityLog = [];
    }
  } catch (e) {
    console.warn("Failed to parse userActivity cookie:", e);
  activityLog = [];
  }


  activityLog.push({page: currentPage, time: now });


  if (activityLog.length > 10) {
    activityLog = activityLog.slice(-10); // last 10 items
  }


  try {
    setCookie("userActivity", JSON.stringify(activityLog), 7);
  console.log("User Activity:", activityLog);
  } catch (e) {
    console.error("Failed to save user activity cookie:", e);
  }
</script>
