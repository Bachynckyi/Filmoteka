var btn=document.querySelector(".btn-toggle"),currentTheme=localStorage.getItem("theme");"dark"==currentTheme&&(document.body.classList.add("dark-theme"),btn.classList.toggle("btn-toggle--toggle")),btn.addEventListener("click",(function(t){document.body.classList.toggle("dark-theme");var e="light";document.body.classList.contains("dark-theme")&&(e="dark"),localStorage.setItem("theme",e),localStorage.setItem("btnToggle",btnToggle)})),document.querySelector(".btn-toggle").addEventListener("click",(function(t){t.target.closest(".btn-toggle").classList.toggle("btn-toggle--toggle")}));
//# sourceMappingURL=library.d47d0597.js.map