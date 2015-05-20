
function borderLoaded1(args) {
    if (!args.object.ios) return; //This method is only for iOS
    var theView = args.object._view;
    theView.layer.contents = UIImage.imageNamed("app/res/background1.jpeg").CGImage;
}

function borderLoaded2(args) {
    if (!args.object.ios) return; //This method is only for iOS
    var theView = args.object._view;
    
    var image = UIImage.imageNamed("app/res/background2.jpeg");
    var background = UIColor.alloc().initWithPatternImage(image);    
    theView.backgroundColor = background;
    background.release();
}

function borderLoaded3(args) {
    if (!args.object.ios) return; //This method is only for iOS
    var theView = args.object._view;
    
    //Get image from deployed file
    var imgPath = NSBundle.mainBundle().pathForResourceOfType("app/res/background3", "jpeg");
    var imgUrl = NSURL.fileURLWithPath(imgPath);
    
    var imgData = NSData.dataWithContentsOfURL(imgUrl);
    var img = UIImage.imageWithData(imgData);
    var imageView = UIImageView.alloc().initWithImage(img);

    theView.addSubview(imageView);
    theView.sendSubviewToBack(imageView);
}

function borderLoaded4(args) {
    if (!args.object.ios) return; //This method is only for iOS
    var theView = args.object._view;
    
    //Get image from internet URL
    var imgUrl = NSURL.alloc().initWithString("http://www.dvd-ppt-slideshow.com/images/ppt-background/background-9.jpg");

    var imgData = NSData.dataWithContentsOfURL(imgUrl);
    var img = UIImage.imageWithData(imgData);
    var imageView = UIImageView.alloc().initWithImage(img);

    theView.addSubview(imageView);
    theView.sendSubviewToBack(imageView);
}

exports.borderLoaded1 = borderLoaded1;
exports.borderLoaded2 = borderLoaded2;
exports.borderLoaded3 = borderLoaded3;
exports.borderLoaded4 = borderLoaded4;