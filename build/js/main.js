$(".dropdown-menu a.dropdown-toggle").on("click",function(o){return $(this).next().hasClass("show")||$(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),$(this).next(".dropdown-menu").toggleClass("show"),$(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(o){$(".dropdown-submenu .show").removeClass("show")}),!1});
//# sourceMappingURL=main.js.map
