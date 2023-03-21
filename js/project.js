projects=[
    {
        "Name": "Saas Cofounder",
        "Link": "https://saascofounders.com/",
        "Tech": "WordPress",
        "Image": "assets/projects/saas-cofounder.webp",
    },
    {
        "Name": "Messiah Frieghts",
        "Link": "https://messiahfreight.co.uk/",
        "Tech": "WordPress",
        "Image": "assets/projects/Messiah-Frieghts.webp",
    },
    {
        "Name": "Doaa Mkalde",
        "Link": "https://doaamkalde.com/",
        "Tech": "WordPress",
        "Image": "assets/projects/doamkalde.webp",
    },
    {
        "Name": "The Heravi",
        "Link": "https://theheravi.com/",
        "Tech": "Shopify",
        "Image": "assets/projects/heravi.webp",
    },
    {
        "Name": "Outlaw Jackets",
        "Link": "https://outlawjackets.com/",
        "Tech": "Shopify",
        "Image": "assets/projects/outlaw.webp",
    },
   
    {
        "Name": "Beblox",
        "Link": "https://beblox.com/",
        "Tech": "Shopify",
        "Image": "assets/projects/beblox.webp",
    },
    {
        "Name": "Scam Token",
        "Link": "https://www.scamlistcrypto.com/",
        "Tech": "React",
        "Image": "assets/projects/scamtoken.webp",
    },
    {
        "Name": "Prolognet",
        "Link": "https://prolognet.com/",
        "Tech": "Html/Css/Javascript",
        "Image": "assets/projects/prolognet.webp",
    },
    {
        "Name": "Style Co.",
        "Link": "https://thestyle.co/",
        "Tech": "Shopify",
        "Image": "assets/projects/styleco.webp",
    },
    {
        "Name": "Bristle Health",
        "Link": "https://shop.bristlehealth.com/",
        "Tech": "Shopify",
        "Image": "assets/projects/bristle-health.webp",
    }
   
   
]

var projectCount = 1

for (var i = 0; i < projects.length; i++) {

    $(".work").append(
     
     '<div class="work-item">' +
        '<div class="carousel-box">' +
            '<a href="' + projects[i].Link + '" class="title">' + projects[i].Name + ' </a>' +
            '<h3 class="sub-title">'+ projects[i].Tech +'</h3>' +
            '<div class="num">'+ projectCount ++ +'</div>' +
            '<img src="' + projects[i].Image + '" loading="lazy"/>' +
        '</div>' +
    '</div>'

    )
    
   
}