document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".sidebar ul li").forEach((item) => {
    item.addEventListener("click", () => {
      const dropdown = item.querySelector(".dropdown");
      if (dropdown) {
        dropdown.classList.toggle("show");
      }
    });
  });

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Edit functionality to be implemented");
    });
  });

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", () => {
      const row = button.closest("tr");
      row.remove();
      alert("User deleted");
    });
  });

  const name = prompt("Please enter your name:");
  const gender = prompt("Please enter your gender:");
  const username = document.getElementById("username");
  const profilename = document.getElementById("profilename");
  const profilepic =document.getElementById("profilepic")
  if (name) {
    username.textContent = name;
    profilename.textContent = name;
  }

  if (gender.toLowerCase() === "male") {
    alert("Welcome, Mr. " + name + "!");
    profilepic.src ="/images/boys.jpg";
  } else if (gender.toLowerCase() === "female") {
    alert("Welcome, Ms. " + name + "!");
    profilepic.src = "/images/girls.jpg";
  } else {
    alert("Welcome, " + name + "!");
    profilepic.src = "/images/pride.webp";
  }
});
