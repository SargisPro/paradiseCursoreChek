const form = () => {
  const forms = document.querySelectorAll('form');
        inputs = document.querySelectorAll('input');

    const postData = async (url, formData) => {
    let loaded = document.querySelector('.wrapper-loaded');
    loaded.classList.add('flex');
    let response = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    return await response.text();
  };

  forms.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      const inputForm = item.querySelectorAll('input');


      let error = 0;
      for (let i = 0; i < inputForm.length; i++) {
        const el = inputForm[i];

        if (!el.value) {
          el.parentElement.classList.add('_error');
          el.classList.add('_error');
          error++;

        } else {

          el.parentElement.classList.remove('_error');
          el.classList.remove('_error');

          if (el.getAttribute('type') === 'checkbox' && el.checked === false) {
            el.classList.add('_error');
            el.parentElement.classList.add('_error');
            error++;

          } else {

            el.parentElement.classList.remove('_error');
            el.classList.remove('_error');
          };
        };

        if (el.getAttribute('name') === 'phone') {
          if (el.value.length < 18) {
            el.parentElement.classList.add('_error');
            el.classList.add('_error');
            error++

          } else {

            el.parentElement.classList.remove('_error');
            el.classList.remove('_error');
          };
        };
      };


      const sucsses = document.querySelector('.sucsses');
      const successErr = document.querySelector('.sucsses-error');
      const loaded = document.querySelector('.wrapper-loaded');

      const formData = new FormData(item);

      if (error === 0) {
        postData('mail.php', formData)
        .then(res => {
          loaded.classList.remove('flex');
          sucsses.classList.add('sucsses_active');
          item.reset();
        })
        .catch((error) => {
          setTimeout(() => {
            loaded.classList.remove('flex');
            sucsses.classList.remove('sucsses_active');
            successErr.classList.add('sucsses_active')
            item.reset();
          },2000);
        })
        .finally(() => {
          setTimeout(() => {
            sucsses.classList.remove('sucsses_active');
            successErr.classList.remove('sucsses_active');
            item.reset();
            window.location.reload();
          },3000);
        });
      };
    });
  });
};


form();
