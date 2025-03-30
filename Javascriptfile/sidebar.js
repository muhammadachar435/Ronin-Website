
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Hide Sidebar
    } else {
        sidebar.style.left = "0px"; // Show Sidebar
    }
}

function openChildSidebar() {
    document.getElementById('childSidebar').style.display = 'block';
}

function closeChildSidebar() {
    // document.getElementById('childSidebar').style.display = 'none';
    document.getElementById('childSidebar').style.display = 'none';
}


function openChildSidebar1(){
    document.getElementById('child-sidebar12').style.display = 'block';  
    console.log("Work")
}

function closeChildSidebar1() {
    document.getElementById('child-sidebar12').style.display = 'none';
}


function openChildSidebar2(){
    document.getElementById('Charging').style.display = 'block'; 
    console.log("work3")  
}

function closeChildSidebar2() {
    document.getElementById('Charging').style.display = 'none';
}


function openChildSidebar3() {
    document.getElementById('Accessories').style.display = 'block';
    console.log("work4")  
}
function closeChildSidebar3() {
    document.getElementById('Accessories').style.display = 'none';
}



function toggleChildSidebar(id) {
    let sidebar = document.getElementById(id);

    // Close any other open sidebar before opening a new one
    let allSidebars = document.querySelectorAll('.sidebar');
    allSidebars.forEach(sb => {
        if (sb !== sidebar && sb.style.height === '250px') {
            sb.style.height = '0px';
            setTimeout(() => { sb.style.display = 'none'; }, 300); // Hide after transition
        }
    });

    // Toggle the clicked sidebar
    if (sidebar.style.height === '450px') {
        // Slide up (close)
        sidebar.style.height = '0px';
        setTimeout(() => { sidebar.style.display = 'none'; }, 300);
    } else {
        // Slide down (open)
        sidebar.style.display = 'block';
        setTimeout(() => { sidebar.style.height = '450px'; }, 10); // Small delay for smooth transition
    }
}
