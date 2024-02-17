import shoping1 from "../images/shoping1.png"
import shoping2 from "../images/shoping2.png"

export const shopData = [
    {
        title: "Home",
        url: false
      },
      {
        title: "Services",
        url: true,
        child: [
          {
            title: "web design",
            url: false
          },
          {
            title: "web development",
            url: true,
            child: [
              {
                title: "Frontend",
                url: true
              },
              {
                title: "Backend",
                url: true,
                child: [
                  {
                    title: "NodeJS",
                    url: true
                  },
                  {
                    title: "PHP",
                    url: true
                  }
                ]
              }
            ]
          },
          {
            title: "SEO",
            url: true
          }
        ]
      },
      {
        title: "About",
        url: true,
        child: [
          {
            title: "Who we are",
            url: true
          },
          {
            title: "Our values",
            url: true
          }
        ]
    

    },
   
    

    
]