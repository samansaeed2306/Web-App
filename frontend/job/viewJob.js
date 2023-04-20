$(document).ready(function() {
    // Listen for clicks on the "View Jobs" button
    $('#viewJobs').on('click', function() {
      // Send a GET request to the server to retrieve the job data
      fetch('http://localhost:5000/viewJob')
        .then(response => response.json())
        .then(data => {
          // Clear the job container div
          $('#job-container').empty();
           console.log(data)
          // Loop through the job data and create a card for each job
          data.forEach(job => {
            var card = $('<div>').addClass('card');
            var cardBody = $('<div>').addClass('card-body');
            var jobTitle = $('<h5>').addClass('card-title').text(job.title);
            var jobDescription = $('<p>').addClass('card-text').text(job.description);
            var qualification = $('<p>').addClass('card-text').text(job.required_Qualification);
            var jobSalary = $('<p>').addClass('card-text').text(job.salary);
            cardBody.append(jobTitle, jobDescription, jobSalary, qualification);
            card.append(cardBody);
            $('#job-container').append(card);
          });
        })
        .catch(error => console.error(error));
    });
  });

  
  
    // Listen for clicks on the "View Jobs" button
   // Construct the URL with the search query parameters
   document.getElementById('s-bar').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
  
    // Construct the URL with the search query parameters
    const searchTitle = document.getElementById('search').value;
    const searchUrl = `http://localhost:5000/searchJob?title=${searchTitle}`;
  
    // Send a GET request to the server to retrieve the job data
    fetch(searchUrl)
      .then(response => response.json())
      .then(data => {
        // Clear the job container div
        
        console.log(data);
        $('#job-container').empty();
        // Loop through the job data and create a card for each job
        data.forEach(job => {
          var card = $('<div>').addClass('card');
          var cardBody = $('<div>').addClass('card-body');
          var jobTitle = $('<h5>').addClass('card-title').text(job.title);
          var jobDescription = $('<p>').addClass('card-text').text(job.description);
          var qualification = $('<p>').addClass('card-text').text(job.required_Qualification);
          var jobSalary = $('<p>').addClass('card-text').text(job.salary);
          cardBody.append(jobTitle, jobDescription, jobSalary, qualification);
          card.append(cardBody);
          $('#job-container').append(card);
        });
      })
      .catch(error => console.error(error));
  });
  