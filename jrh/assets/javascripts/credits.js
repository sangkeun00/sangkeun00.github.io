"use strict";

var Segredario = Segredario || {};
Segredario.Credits = function() {};

Segredario.Credits.prototype = {

  create: function() {
    this.createText();
    this.createBMG();

    this.createTitle('- Super Juliana -');

    this.createParagraph('Sang Keun Choe');
    this.createParagraph('Juliana R. Hougland');
    this.createTitle('Director');
    this.createParagraph('Sang Keun Choe');

    this.createTitle('Special Thanks');
    this.createParagraph('Betty');
    this.createParagraph('Sherlock');
    this.createParagraph('Schenley Apartments');
    this.createParagraph('Ligia Hougland');
    this.createParagraph('Charles Hougland');
    this.createParagraph('Nicholas Hougland');
    this.createParagraph('Kyleigh Peterson');
    this.createParagraph('Sara Dierberger');
    this.createParagraph('Yeojoon Youn');
    this.createParagraph('Wooje Chang');

    this.createTitle('HTML5 Game Framework');
    this.createParagraph('Phaser');
    this.createParagraph('Copyright © 2016 Photon Storm Ltd.');
    this.createTitle('Level Editor');
    this.createParagraph('Tiled Map Editor');
    this.createParagraph('Copyright © 2016 Thorbjørn Lindeijer');
    this.createTitle('Pixel Editor');
    this.createParagraph('Pixel.Tools');
    this.createParagraph('Copyright © 2016 Alex Hanson-White');
    this.createTitle('Sprites');
    this.createParagraph('The Spriters Resource');
    this.createParagraph('Nintendo');
    this.createParagraph('Copyright © 2016 Nintendo Co., Ltd.');
    this.createTitle('Sounds');
    this.createParagraph('The Sounds Resource');
    this.createParagraph('Mario Mayhem');
    this.createParagraph('Nintendo');
    this.createParagraph('Copyright © 2016 Nintendo Co., Ltd.');
    this.createTitle('Fontes');
    this.createParagraph('Super Mario Bros Alphabet');
    this.createParagraph('Copyright © 2016 Aryel Filipe');

    this.createTitle('Thank You For Playing!');

    this.createTitle('Produced By');
    this.createParagraph('Sang Keun Choe');


    this.createTextAnimations();
  },

  createText: function() {
    this.text = this.game.add.group();
  },

  createBMG: function() {
    this.bmg = this.game.add.audio('credits');
    this.bmg.play();
  },

  createTextAnimations: function() {
    this.game.add.tween(this.text).to({
      y: -(this.game.height + this.text.height),
    },
    40000, Phaser.Easing.Linear.None, true).onComplete.add(function() {
      this.endingMessage();
    }.bind(this));
  },

  titleCounter: 0,
  paragraphCounter: 0,

  createTitle: function(content){
    this.titleCounter += 1;

    var style = { font: "15px Verdana", fill: "#868AEE", align: "center" };

    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, content, style);
    text.x = this.game.world.centerX - (text.width / 2);
    text.y = this.game.world.centerY + ((this.titleCounter * 32) + (this.paragraphCounter * 28));

    this.text.add(text);
  },

  createParagraph: function(content){
    this.paragraphCounter += 1;

    var style = { font: "13px Verdana", fill: "#ffffff", align: "center" };

    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, content, style);
    text.x = this.game.world.centerX - (text.width / 2);
    text.y = this.game.world.centerY + ((this.titleCounter * 32) + (this.paragraphCounter * 28));

    this.text.add(text);
  },

  endingMessage: function() {
    var style = { font: "13px Verdana", fill: "#ffffff", align: "center" };
    var content = 'A nova fase apenas começou... ';

    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, content, style);
    text.x = this.game.world.centerX - (text.width / 2);
    text.y = this.game.height;

    this.game.add.tween(text).to({
      y: +(this.game.height / 2),
    },
    2000, Phaser.Easing.Linear.None, true);
  }
};
