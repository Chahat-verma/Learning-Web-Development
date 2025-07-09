function createcard(title, cname, views, timeold, duration, thumbnail) {
    let Cview;
    if (views < 1000) {
        Cview = views
    }
    else if (views > 1000 && views < 1000000) {
        Cview = (views / 1000).toFixed(1) + "K"
    } else {
        Cview = (views / 1000000).toFixed(2) + "M"
    }

    let time;
    if (timeold < 31) {
        time = timeold + "days"
    }
    else if (timeold > 31 && timeold < 366) {
        time = (timeold / 30).toFixed(0) + "Month"
    } else {
        time = (timeold / 365).toFixed(0) + "Year"
    }
    let html = `<div class="card">
            <div class="image">
                <a href ="/"><img src=${thumbnail}
                    alt=""></a>
                <div class ="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1><a href="/">${title}</a></h1>
                <ul>
                    <li><a href="/">${cname}</a></li>
                    <li>${Cview} views</li>
                    <li>${time} ago</li>
                </ul>
            </div>
        </div>`
    document.querySelector(".container").innerHTML = html + document.querySelector(".container").innerHTML
}

createcard("JavaScript Wkeb Development Course - Tutorial #77", "CodeWithHarry", 513403, 12, "42:44", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")