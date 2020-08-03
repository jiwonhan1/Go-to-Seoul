$(function() {
  var model = {
    attractions: [
      {
        "title" : "Art & Culture",
        "pic" : "img/korealogo.jpg",
        "place1" : "Gyeongbokgung Palace",
        "url" : "https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C4258168%2C4270442%2C4274032%2C4305595%2C4306835%2C4308227%2C4317915%2C4319922%2C4322823%2C4328159%2C4366684%2C4367953%2C4371334%2C4381263%2C4386665%2C4398672%2C4401769%2C4403882%2C4410444%2C4270859%2C4284970%2C4291517%2C4307997&hl=en&gl=us&un=1&otf=1&dest_mid=%2Fm%2F0hsqf&dest_state_type=sattd&dest_src=ts&sa=X&rf=EhoKBy9tLzBqancSDUFydCAmIEN1bHR1cmUoAQ#ttdm=37.572266_126.982641_13&ttdmf=%252Fm%252F0zg9hg7",
      },
      {
        "title" : "Art & Culture",
        "pic" : "img/korealogo.jpg",
        "place1": "Gyeongbokgung Palace",
        "url" : "https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C4258168%2C4270442%2C4274032%2C4305595%2C4306835%2C4308227%2C4317915%2C4319922%2C4322823%2C4328159%2C4366684%2C4367953%2C4371334%2C4381263%2C4386665%2C4398672%2C4401769%2C4403882%2C4410444%2C4270859%2C4284970%2C4291517%2C4307997&hl=en&gl=us&un=1&otf=1&dest_mid=%2Fm%2F0hsqf&dest_state_type=sattd&dest_src=ts&sa=X&rf=EhoKBy9tLzBqancSDUFydCAmIEN1bHR1cmUoAQ#ttdm=37.572266_126.982641_13&ttdmf=%252Fm%252F0zg9hg7",
      },
      {
        "title" : "Art & Culture",
        "pic" : "img/korealogo.jpg",
        "place1": "Gyeongbokgung Palace",
        "url" : "https://www.google.com/travel/things-to-do/see-all?g2lb=2502548%2C4258168%2C4270442%2C4274032%2C4305595%2C4306835%2C4308227%2C4317915%2C4319922%2C4322823%2C4328159%2C4366684%2C4367953%2C4371334%2C4381263%2C4386665%2C4398672%2C4401769%2C4403882%2C4410444%2C4270859%2C4284970%2C4291517%2C4307997&hl=en&gl=us&un=1&otf=1&dest_mid=%2Fm%2F0hsqf&dest_state_type=sattd&dest_src=ts&sa=X&rf=EhoKBy9tLzBqancSDUFydCAmIEN1bHR1cmUoAQ#ttdm=37.572266_126.982641_13&ttdmf=%252Fm%252F0zg9hg7",
      }
    ]
  };

  var vision = {
    init: function() {
      view.init();
      $("#attractions").unitegallery({
        tiles_type:"justified",
        theme_enable_preloader: false,
        tile_show_link_icon:true,
        tile_enable_textpanel:true,
        tile_textpanel_title_text_align:"center",
        tile_textpanel_title_font_size:16,
        tiles_justified_row_height: 230,
        lightbox_overlay_opacity:0.8,
        lightbox_slider_control_zoom:false,
        lightbox_textpanel_enable_description:true,
        lightbox_textpanel_title_font_family:"Ubuntu",
        lightbox_textpanel_title_font_size:16,
        lightbox_textpanel_desc_font_family:"Cormorant Garamond",
        lightbox_textpanel_desc_font_size:14,
      });
    },
    getAttractions: function() {
      return model.attractions;
    }
  };

  var view = {
    init: function() {
        this.render();
    },
    render: function() {
        var attractions = vision.getProjects();
        var html = '';
        $.each(attractions, function(Index, attraction) {
            html += '<a href="'+attraction.url+'"><img src="'+attraction.pic+'" data-image="'+attraction.pic+'" alt="'+attraction.title+'"></a>';
        });
        $('#attractions').html(html);
    }
};

vision.init();

});