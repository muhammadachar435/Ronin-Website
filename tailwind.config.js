/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      iphonese:'375px',
      iphonexr:'414px',
      iphone12:'390px',
      iphone14:'425px',
      iphone14pro:'430px',
      vivonew:"436px",
      vivoheignt:"618px",
      vivoheight2:"285.73228346px",
      pixel:'412px',
      resdim:"426px",
      vivo:"372px",
      iphone11:"414px",
      iphone11pro:"404px",
      viviy30:"380px",
      vivi30 :"384px",
      viv0y30:"387px",
      vivo2 :"364px",
      vivo3 :"350px",
      vivo4 :"410px",
      vivo5 :"720px",
      samsung8:'360px',
      samsung:'320px',
      ipdmini:'768px',
      ipdair:'284.5px',
      ipadpro:'1024px',
      surface7:'912px',
      surfaceduo:'540px',
      Galaxyz:'314px',
      Galaxyz4:'344px',
      samsunga5:'412px',
      mypc:"1366px",
      nesthub:'629px',
      lgbig:'1440px',
       sm: '640px',
       md: '768px',
       lg: '1024px',
       xl: '1280px',
       xll:'1345px',
       xllbig:'2560px',
       lgsmall:"884px",
       hd:"2560px",
       xsl:"1047px",
       xsl2:"1100px",
       xsl3:"1446px",
       tab2:"818px"
     },
    extend: {

      backgroundImage: {
        'gray-gradient': 'linear-gradient(to right, #7c7c7c 0%, #7c7c7c 100%)',
      },

      transform: {
        'rotate-x-30': 'rotateX(30deg)',
        'rotate-x-60': 'rotateX(60deg)',
        'rotate-x-90': 'rotateX(90deg)',
        '-rotate-x-30': 'rotateX(-30deg)',
        '-rotate-x-60': 'rotateX(-60deg)',
        '-rotate-x-90': 'rotateX(-90deg)',
        'rotate-y-30': 'rotateY(30deg)',
        'rotate-y-60': 'rotateY(60deg)',
        'rotate-y-90': 'rotateY(90deg)',
        '-rotate-y-30': 'rotateY(-30deg)',
        '-rotate-y-60': 'rotateY(-60deg)',
        '-rotate-y-90': 'rotateY(-90deg)',
      },
      fontSize: {
        '15xl': '120px',  // Or any size you need
       '17xl': '130px',
       '18xl': '190px',
       '19xl': '250px',
       '8': '8px', 
       '6': '6px',
       '11': '11px',
       '9': '9px',
       '10': '10px',
       '12':'12px',
       '18':'18px',
       '13':'13px',


        
      },

      
      boxShadow: {
        custom: '0px 5px 15px rgba(0, 0, 0, 0.35)',
      },
      gridTemplateColumns: {
        'custom': 'repeat(2, minmax(200px, 1fr))',
      },

     


    },
  },
  plugins: [
    
  ],
}

