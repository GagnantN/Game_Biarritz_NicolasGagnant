import Phaser from "phaser";

const assets = "./img/breakout_phaser_project3_wildCodeSchool.png";
const breakjson = "./img/breakout.json";
const sky = "./img/sky.jpg";
const paddlePNG = "./img/paddle.png";

// This is the entry point of your game.

export default () => {
  let Breakout = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize: function Breakout() {
      Phaser.Scene.call(this, { key: "breakout" });
      //   this.brickColor;
      //   this.brickWild;
      //   this.paddle;
      //   this.ball;
    },

    preload: function() {
      this.load.atlas("assets", assets, breakjson);
      this.load.image("sky", sky);
      this.load.image("paddle", paddlePNG);
    },

    create: function() {
      this.add.image(600, 300, "sky");

      //  Enable world bounds, but disable the floor
      this.physics.world.setBoundsCollision(true, true, true, false);

      //  Create bricks wilds
      this.brickColor = this.physics.add.staticGroup({
        key: "assets",
        frame: ["brick_wild.png", "brick_wild.png"],
        frameQuantity: 5,
        gridAlign: {
          width: 5,
          height: 6,
          cellWidth: 170,
          cellHeight: 105,
          x: 115,
          y: 113
        }
      });

      this.brickWild = this.physics.add.staticGroup({
        key: "assets",
        frame: ["brick_wild.png"],
        frameQuantity: 4,
        gridAlign: {
          width: 5,
          height: 6,
          cellWidth: 170,
          cellHeight: 45,
          x: 200,
          y: 135
        }
      });

      // Create brick urbanease
      this.brickUrbanease = this.physics.add.staticGroup({
        key: "assets",
        frame: ["urbanease.png"],
        frameQuantity: 1,
        gridAlign: {
          width: 10,
          height: 6,
          cellWidth: 64,
          cellHeight: 32,
          x: 62,
          y: 129
        }
      });

      // Create brick fiestaRound
      this.brickFiestaRound = this.physics.add.staticGroup({
        key: "assets",
        frame: ["fiestaRound.png"],
        frameQuantity: 1,
        gridAlign: {
          width: 10,
          height: 6,
          cellWidth: 64,
          cellHeight: 32,
          x: 572,
          y: 129
        }
      });

      // Create brick smoothieclette
      this.brickSmoothieclette = this.physics.add.staticGroup({
        key: "assets",
        frame: ["smoothieclette.png"],
        frameQuantity: 1,
        gridAlign: {
          width: 10,
          height: 6,
          cellWidth: 64,
          cellHeight: 32,
          x: 318,
          y: 77
        }
      });

      // Create brick izanami
      this.brickIzanami = this.physics.add.staticGroup({
        key: "assets",
        frame: ["izanami.png"],
        frameQuantity: 1,
        gridAlign: {
          width: 10,
          height: 6,
          cellWidth: 64,
          cellHeight: 32,
          x: 232,
          y: 129
        }
      });

      // Create brick chatBot
      this.brickChatBot = this.physics.add.staticGroup({
        key: "assets",
        frame: ["chatBot.png"],
        frameQuantity: 1,
        gridAlign: {
          width: 10,
          height: 6,
          cellWidth: 64,
          cellHeight: 32,
          x: 487,
          y: 77
        }
      });

      // Create brick upKine
      this.brickUpKine = this.physics.add.staticGroup({
        key: "assets",
        frame: ["upKine.png"],
        frameQuantity: 1,
        gridAlign: {
          width: 10,
          height: 6,
          cellWidth: 64,
          cellHeight: 32,
          x: 743,
          y: 129
        }
      });

      this.ball = this.physics.add
        .image(400, 500, "assets", "ball.png")
        .setCollideWorldBounds(true)
        .setBounce(1);
      this.ball.setData("onPaddle", true);

      this.paddle = this.physics.add.image(400, 550, "paddle").setImmovable();

      //  Our colliders
      this.physics.add.collider(
        this.ball,
        this.skyInvisible,
        this.hitSkyInvisible,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickColor,
        this.hitBrick,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickWild,
        this.hitBrickWild,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.paddle,
        this.hitPaddle,
        null,
        this
      );

      // Our colliders brickProject
      this.physics.add.collider(
        this.ball,
        this.brickUrbanease,
        this.hitBrickUrbanease,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickFiestaRound,
        this.hitBrickFiestaRound,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickSmoothieclette,
        this.hitBrickSmoothieclette,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickIzanami,
        this.hitBrickIzanami,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickChatBot,
        this.hitBrickChatBot,
        null,
        this
      );
      this.physics.add.collider(
        this.ball,
        this.brickUpKine,
        this.hitBrickUpKine,
        null,
        this
      );

      //  Input events
      this.input.on(
        "pointermove",
        function(pointer) {
          //  Keep the paddle within the game
          this.paddle.x = Phaser.Math.Clamp(pointer.x, 80, 720);

          if (this.ball.getData("onPaddle")) {
            this.ball.x = this.paddle.x;
          }
        },
        this
      );

      this.input.on(
        "pointerup",
        function(pointer) {
          if (this.ball.getData("onPaddle")) {
            this.ball.setVelocity(-75, -300);
            this.ball.setData("onPaddle", false);
          }
        },
        this
      );
    },

    // break brickColor and brickWild !

    hitBrick: function(ball, brick) {
      brick.disableBody(true, true);

      if (this.brickColor.countActive() === 0) {
      }
    },

    hitBrickWild: function(ball, brickTwo) {
      brickTwo.disableBody(true, true);

      if (this.brickWild.countActive() === 0) {
      }
    },

    // break brickUrbanease

    hitBrickUrbanease: function(ball, brickUrbanease) {
      brickUrbanease.disableBody(true, true);

      if (this.brickUrbanease.countActive() === 0) {
        window.open("https://jovial-kalam-91c7d9.netlify.com/");
      }
    },

    // break brickFiestaRound

    hitBrickFiestaRound: function(ball, brickFiestaRound) {
      brickFiestaRound.disableBody(true, true);

      if (this.brickFiestaRound.countActive() === 0) {
        window.open("https://app.fiestaround.fr");
      }
    },

    // break brickSmoothieclette

    hitBrickSmoothieclette: function(ball, brickSmoothieclette) {
      brickSmoothieclette.disableBody(true, true);

      if (this.brickSmoothieclette.countActive() === 0) {
        window.open("https://gagnantn.github.io/");
      }
    },

    // break brickIzanami

    hitBrickIzanami: function(ball, brickIzanami) {
      brickIzanami.disableBody(true, true);

      if (this.brickIzanami.countActive() === 0) {
        window.open("https://gracious-kare-fdac4a.netlify.com/");
      }
    },

    // break brickChatBot

    hitBrickChatBot: function(ball, brickChatBot) {
      brickChatBot.disableBody(true, true);

      if (this.brickChatBot.countActive() === 0) {
        window.open("https://pensive-lalande-0ea04b.netlify.com/");
      }
    },

    // break brickUpKine

    hitBrickUpKine: function(ball, brickUpKine) {
      brickUpKine.disableBody(true, true);

      if (this.brickUpKine.countActive() === 0) {
        window.open("https://cranky-curie-8886ad.netlify.com/");
      }
    },

    resetBall: function() {
      this.ball.setVelocity(0);
      this.ball.setPosition(this.paddle.x, 500);
      this.ball.setData("onPaddle", true);
    },

    hitPaddle: function(ball, paddle) {
      let diff = 0;

      if (ball.x < paddle.x) {
        //  Ball is on the left-hand side of the paddle
        diff = paddle.x - ball.x;
        ball.setVelocityX(-10 * diff);
      } else if (ball.x > paddle.x) {
        //  Ball is on the right-hand side of the paddle
        diff = ball.x - paddle.x;
        ball.setVelocityX(10 * diff);
      } else {
        //  Ball is perfectly in the middle
        //  Add a little random X to stop it bouncing straight up!
        ball.setVelocityX(2 + Math.random() * 8);
      }
    },

    update: function() {
      if (this.ball.y > 600) {
        this.resetBall();
      }
    }
  });

  let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: "breakout-root",
    scene: [Breakout],
    physics: {
      default: "arcade"
    }
  };
  let game = new Phaser.Game(config);
};
