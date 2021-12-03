const animationDuration = 250;
var sidebar = true;

function toggleSidebar() {
	sidebar = !sidebar;
	if(sidebar) {
		showSidebar();
	} else {
		collapseSidebar();
	}
}

function collapseSidebar(withAnimation = true) {
	let headerLeft = document.getElementById("headerColumnLeft");
	let left = document.getElementById("columnLeft");
	let right = document.getElementById("columnRight");
	let button = document.getElementById("collapseButtonInner");
	
	if(withAnimation) {
		headerLeft.style.transition = "all "+(animationDuration/1000)+"s ease-in-out";
		left.style.transition = "all "+(animationDuration/1000)+"s ease-in-out";
		right.style.transition = "all "+(animationDuration/1000)+"s ease-in-out";
	}
	
	left.style.width = "0px";
	left.style.opacity = 0;
	right.style.marginLeft = "0px";
	left.style.marginRight = "0px";
	button.innerHTML = ">";
	headerLeft.style.width = document.getElementById("title").clientWidth+"px";
	
	if(withAnimation) {
		setTimeout(function() {
			left.style.transition = "none";
			right.style.transition = "none";
			headerLeft.style.transition = "none";
		}, animationDuration);
	}
}

function showSidebar(withAnimation = true, width = "350px", margin = "15px") {
	let headerLeft = document.getElementById("headerColumnLeft");
	let left = document.getElementById("columnLeft");
	let right = document.getElementById("columnRight");
	let button = document.getElementById("collapseButtonInner");
	
	if(withAnimation) {
		left.style.transition = "all "+(animationDuration/1000)+"s ease-in-out";
		right.style.transition = "all "+(animationDuration/1000)+"s ease-in-out";
		headerLeft.style.transition = "all "+(animationDuration/1000)+"s ease-in-out";
	}
	
	headerLeft.style.width = width;
	right.style.marginLeft = margin;
	left.style.marginRight = margin;
	left.style.width = width;
	left.style.opacity = 1;
	button.innerHTML = "<";
	
	if(withAnimation) {
		setTimeout(function() {
			left.style.transition = "none";
			right.style.transition = "none";
			headerLeft.style.transition = "none";
		}, animationDuration);
	}
}

window.matchMedia('(orientation:portrait)').addEventListener("change", function(e) {
	   if(window.matchMedia('(orientation:portrait)').matches) {
		   var cacheSidebar = sidebar;
		   showSidebar(false, "100%", "0px");
		   sidebar = cacheSidebar;
	   } else {
		   if(sidebar) {
			   showSidebar(false);
		   } else {
			   collapseSidebar(false);
		   }
	   }
});