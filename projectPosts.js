function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        ['project1.html','CNC with Arduino (Python, C++)','images/image-placeholder.png'],
        ['project2.html','Earth2 Bot using Selenium (Java)','images/earth2logo.jpg'],
        ['project3.html','Personal Website (JavaScript, HTML, CSS)','images/image-placeholder.png'],
        ['project4.html','Traxus Webapp (Java, PHP, HTML, CSS)','images/image-placeholder.png'],
        ['project5.html','Blackjack (Java)','images/image-placeholder.png']
    ];
    let numberOfListItems = listData.length;
    let element = document.getElementById('projectsRow');
    for (i = 0; i < numberOfListItems; i++) {
            var column = document.createElement('div');
            column.setAttribute('class', 'col-md-4 project');
            
            var a = document.createElement('a');
            a.setAttribute('href', listData[i][0]);

            var projectTitle = document.createElement('div');
            projectTitle.setAttribute('class', 'centerH');
            var title = document.createElement('h3');
            title.innerHTML = listData[i][1];
            projectTitle.appendChild(title);
            
            var image = document.createElement('img');
            image.setAttribute('src', listData[i][2]);
            image.setAttribute('class', 'img-responsive');
            image.setAttribute('width', '100%');
            
            a.appendChild(projectTitle);
            a.appendChild(image);
            column.appendChild(a);
        
            element.appendChild(column);
    }
}

// Usage
makeList();
