var addRippleEffect = function (e) {
    var target = e.target;
    if (target.tagName.toLowerCase() !== 'button') return false;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
}

function disableElementForSeconds(element, seconds, buttonText) {
    element.disabled = true;
  
    var originalText = element.innerText;
    var localizedText = buttonText.replace('{{seconds}}', seconds);
  
    element.innerText = localizedText;
  
    var intervalId = setInterval(function() {
      seconds--;
      localizedText = buttonText.replace('{{seconds}}', seconds);
      element.innerText = localizedText;
  
      if (seconds === 0) {
        clearInterval(intervalId);
        element.disabled = false;
        element.innerText = originalText;
      }
    }, 1000);
  }
  
  function processQueryString(url) {

    const params = {};
  
    const regex = /[?#](.+)$/;
    const match = url.match(regex);
  
    if (match) {
      const fgUrl = match[1];
      const paramPair = fgUrl.split('&');
  
      paramPair.forEach((par) => {
        const [k, v] = par.split('=');
        params[k] = v;
      });
    }
  
    return params;
  }  
  
  

