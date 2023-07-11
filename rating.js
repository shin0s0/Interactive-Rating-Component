  let selectedRatings;

    function updateRating(ratingValue) {
      selectedRating = ratingValue;
    }

    function submitRating() {
      if (selectedRating > 0) {
       
        const submit = document.querySelector('.rating');
        submit.style.display = 'none';

        const b1 = document.getElementById('back');
        b1.style.display = 'none';

        const para1 = document.getElementById('data');
        para1.style.display = 'none';
        
        const heading = document.getElementById('head');
        heading.style.display = 'none';

        const b2 = document.getElementById('submit');
        b2.style.display = 'none';
        
        const secp = document.querySelector('.tpage');
        secp.classList.add('t-style');
        var s=`You selected ${selectedRating} out of 5`;
        document.getElementById('select').innerHTML= s ;
        
      }
      
    }