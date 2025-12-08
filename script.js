document.getElementById("sub").addEventListener("click", () => {
        setTimeout(() => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
        });
      });