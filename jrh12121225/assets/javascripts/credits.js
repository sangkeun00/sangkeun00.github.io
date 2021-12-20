"use strict";

var Segredario = Segredario || {};
Segredario.Credits = function() {};

Segredario.Credits.prototype = {

  create: function() {
    this.createText();
    this.createBMG();

    this.createTitle('The Project: Super Juliana');

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
    this.createParagraph('Iun Hee Kwon');
    this.createParagraph('Ye Jung Choe');
    this.createParagraph('Kyleigh Peterson');
    this.createParagraph('Sara Dierberger');
    this.createParagraph('Yeojoon Youn');
    this.createParagraph('Wooje Chang');
    this.createParagraph('Max Armour');
    this.createParagraph('Alyssa Migs');
    this.createParagraph('Korra');
    this.createParagraph('Ron Sessa');
    this.createParagraph('Lea Salvador');
    this.createParagraph('Chester');
    this.createParagraph('Colton Brown');
    this.createParagraph('Taylor Norris');
    this.createParagraph('Calvin');
    this.createParagraph('Melanie Cuddyre');
    this.createParagraph('Jack Leech');
    this.createParagraph('Theo');
    this.createParagraph('Rose Egan');
    this.createParagraph('Samson');
    this.createParagraph('Ann-Marie Rodriguez');
    this.createParagraph('Mary Garrett');
    this.createParagraph('Eun Young Ahn');
    this.createParagraph('James Baker');
    this.createParagraph('John Willian Stauffer');
    this.createParagraph('Deanna Huck');
    this.createParagraph('Maria Canino');

    this.createTitle('Sounds');
    this.createParagraph('The Sounds Resource');
    this.createParagraph('Have yourself a merry little Christmas');
    this.createParagraph('All I want for Christmas is you');
    this.createParagraph('Everything happens to me');
    this.createParagraph('Mario Mayhem');
    this.createParagraph('Nintendo');

    this.createTitle('Produced By');
    this.createParagraph('The Beau Studio');

    this.createTitle('Dedicated To');
    this.createParagraph('Juliana R. Hougland');

    this.createTitle('Copyright');
    this.createParagraph('Copyright © 2021 The Beau Studio');
    this.createParagraph('Public distribution of content is illegal');
    
    this.createTitle('Merry Christmas!');

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
    var content = 'The End';

    var text = this.game.add.text(this.game.world.centerX, this.game.world.centerY, content, style);
    text.x = this.game.world.centerX - (text.width / 2);
    text.y = this.game.height;

    this.game.add.tween(text).to({
      y: +(this.game.height / 2),
    },
    2000, Phaser.Easing.Linear.None, true);
  }
};
