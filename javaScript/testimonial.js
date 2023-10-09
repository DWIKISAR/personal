const testimonialData = [
  {
    author: "Dwiki Solihin",
    quote: "mount Sindoro, Indonesia",
    image: "https://i.postimg.cc/RhKNbjfw/IMG-20171224-170954-897.jpg",
    rating: 4,
  },
  {
    author: "Dwiki Solihin",
    quote: "mount Sumbing, Indonesia",
    image: "https://i.postimg.cc/W45rGL63/IMG-20200101-113247-1.jpg",
    rating: 2,
  },
  {
    author: "Dwiki Solihin",
    quote: "mount Merbabu, Indonesia",
    image: "https://i.postimg.cc/WzY2NVZB/IMG20230617061552-1.jpg",
    rating: 3,
  },
  {
    author: "Dwiki Solihin",
    quote: "mount Ciremai, Indonesia",
    image: "https://i.postimg.cc/XYH9RBXL/IMG-20230917-233225-024-1.jpg",
    rating: 4,
  },
  {
    author: "Dwiki Solihin",
    quote: "Senaru Crater Lake, Lombok, Indonesia",
    image:
      "https://images.unsplash.com/photo-1559224745-8790543a19bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    rating: 5,
  },

  {
    author: "Dwiki Solihin",
    quote: "Mount Rinjani, Indonesia",
    image:
      "https://images.unsplash.com/photo-1506255677943-8d8cb3619c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    rating: 4,
  },
];

function allTestimonial() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `
    <div class="testimonial">
        <img
            class="profile-testimonial"
            src="${item.image}"
            />
            <p class="quote">${item.quote}</p>
            <p class="author">${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>
    `;
  });
  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonial();

//Filtered testimonial
function filterTestimonial(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `
        <div class="testimonial">
        <img
            class="profile-testimonial"
            src="${item.image}"
            />
            <p class="quote">${item.quote}</p>
            <p class="author">${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
    </div>
    `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
