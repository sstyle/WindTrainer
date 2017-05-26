"undefined"==typeof Ballistics&&(Ballistics={});Ballistics.M_PI=Math.PI;Ballistics.GRAVITY=-32.194;Ballistics.DragFunctions={G1:1,G2:2,G3:3,G4:4,G5:5,G6:6,G7:7,G8:8,GA:9};
Ballistics.ZeroAngle=function(d,f,a,b,c,v){var l=1/a,m=-b/12,s=0,h,q=0,g=0,e=0,t=0,n=0,w=0,p=q=0,x=0,u=0,k,r=0;h=Ballistics.DegtoRad(14);for(k=0;0==r;k+=h){e=a*Math.sin(k);g=a*Math.cos(k);x=Ballistics.GRAVITY*Math.sin(k);u=Ballistics.GRAVITY*Math.cos(k);s=0;for(m=-b/12;s<=3*c;){n=e;t=g;q=Math.pow(Math.pow(g,2)+Math.pow(e,2),.5);l=1/q;w=Ballistics.retard(d,f,q);p=-w*e/q*l;q=-w*g/q*l;g+=q;e+=p;e+=l*u;g+=l*x;s+=l*(g+t)/2;m+=l*(e+n)/2;if(0>e&&m<v)break;if(e>3*g)break}m>v&&0<h&&(h=-h/2);m<v&&0>h&&(h=-h/
    2);Math.abs(h)<Ballistics.MOAtoRad(.01)&&(r=1);k>Ballistics.DegtoRad(45)&&(r=1)}return Ballistics.RadtoDeg(k)};Ballistics.DegtoMOA=function(d){return 60*d};Ballistics.DegtoRad=function(d){return d*Ballistics.M_PI/180};Ballistics.MOAtoDeg=function(d){return d/60};Ballistics.MOAtoRad=function(d){return d/60*Ballistics.M_PI/180};Ballistics.RadtoDeg=function(d){return 180*d/Ballistics.M_PI};Ballistics.RadtoMOA=function(d){return 10800*d/Ballistics.M_PI};
Ballistics.retard=function(d,f,a){var b=-1,c=b=-1;switch(d){case Ballistics.DragFunctions.G1:case Ballistics.DragFunctions.GA:4230<a?(b=1.477404177730177E-4,c=1.9565):3680<a?(b=1.920339268755614E-4,c=1.925):3450<a?(b=2.894751026819746E-4,c=1.875):3295<a?(b=4.349905111115636E-4,c=1.825):3130<a?(b=6.520421871892662E-4,c=1.775):2960<a?(b=9.748073694078696E-4,c=1.725):2830<a?(b=.001453721560187286,c=1.675):2680<a?(b=.002162887202930376,c=1.625):2460<a?(b=.003209559783129881,c=1.575):2225<a?(b=.003904368218691249,
    c=1.55):2015<a?(b=.003222942271262336,c=1.575):1890<a?(b=.002203329542297809,c=1.625):1810<a?(b=.001511001028891904,c=1.675):1730<a?(b=8.609957592468259E-4,c=1.75):1595<a?(b=4.086146797305117E-4,c=1.85):1520<a?(b=1.954473210037398E-4,c=1.95):1420<a?(b=5.431896266462351E-5,c=2.125):1360<a?(b=8.847742581674416E-6,c=2.375):1315<a?(b=1.456922328720298E-6,c=2.625):1280<a?(b=2.419485191895565E-7,c=2.875):1220<a?(b=1.657956321067612E-8,c=3.25):1185<a?(b=4.745469537157371E-10,c=3.75):1150<a?(b=1.379746590025088E-11,
    c=4.25):1100<a?(b=4.070157961147882E-13,c=4.75):1060<a?(b=2.938236954847331E-14,c=5.125):1025<a?(b=1.228597370774746E-14,c=5.25):980<a?(b=2.916938264100495E-14,c=5.125):945<a?(b=3.855099424807451E-13,c=4.75):905<a?(b=1.185097045689854E-11,c=4.25):860<a?(b=3.566129470974951E-10,c=3.75):810<a?(b=1.045513263966272E-8,c=3.25):780<a?(b=1.291159200846216E-7,c=2.875):750<a?(b=6.824429329105383E-7,c=2.625):700<a?(b=3.569169672385163E-6,c=2.375):640<a?(b=1.839015095899579E-5,c=2.125):600<a?(b=5.71117468873424E-5,
    c=1.95):550<a?(b=9.226557091973427E-5,c=1.875):250<a?(b=9.337991957131389E-5,c=1.875):100<a?(b=7.225247327590413E-5,c=1.925):65<a?(b=5.792684957074546E-5,c=1.975):0<a&&(b=5.206214107320588E-5,c=2);break;case Ballistics.DragFunctions.G2:1674<a?(b=.0079470052136733,c=1.36999902851493):1172<a?(b=.00100419763721974,c=1.65392237010294):1060<a?(b=7.15571228255369E-23,c=7.91913562392361):949<a?(b=1.39589807205091E-10,c=3.81439537623717):670<a?(b=2.34364342818625E-4,c=1.71869536324748):335<a?(b=1.77962438921838E-4,
    c=1.76877550388679):0<a&&(b=5.18033561289704E-5,c=1.98160270524632);break;case Ballistics.DragFunctions.G5:1730<a?(b=.00724854775171929,c=1.41538574492812):1228<a?(b=3.50563361516117E-5,c=2.13077307854948):1116<a?(b=1.84029481181151E-13,c=4.81927320350395):1004<a?(b=1.34713064017409E-22,c=7.8100555281422):837<a?(b=1.03965974081168E-7,c=2.84204791809926):335<a?(b=1.09301593869823E-4,c=1.81096361579504):0<a&&(b=3.51963178524273E-5,c=2.00477856801111);break;case Ballistics.DragFunctions.G6:3236<a?(b=
    .0455384883480781,c=1.15997674041274):2065<a?(b=.0716726184965377,c=1.10704436538885):1311<a?(b=.00166676386084348,c=1.60085100195952):1144<a?(b=1.01482730119215E-7,c=2.9569674731838):1004<a?(b=4.31542773103552E-18,c=6.34106317069757):670<a?(b=2.04835650496866E-5,c=2.11688446325998):0<a&&(b=7.50912466084823E-5,c=1.92031057847052);break;case Ballistics.DragFunctions.G7:4200<a?(b=1.29081656775919E-9,c=3.24121295355962):3E3<a?(b=.0171422231434847,c=1.27907168025204):1470<a?(b=.00233355948302505,c=1.52693913274526):
    1260<a?(b=7.97592111627665E-4,c=1.67688974440324):1110<a?(b=5.71086414289273E-12,c=4.3212826264889):960<a?(b=3.02865108244904E-17,c=5.99074203776707):670<a?(b=7.52285155782535E-6,c=2.1738019851075):540<a?(b=1.31766281225189E-5,c=2.08774690257991):0<a&&(b=1.34504843776525E-5,c=2.08702306738884);break;case Ballistics.DragFunctions.G8:3571<a?(b=.0112263766252305,c=1.33207346655961):1841<a?(b=.0167252613732636,c=1.28662041261785):1120<a?(b=.00220172456619625,c=1.55636358091189):1088<a?(b=2.0538037167098E-16,
    c=5.80410776994789):976<a?(b=5.92182174254121E-12,c=4.29275576134191):0<a&&(b=4.3917343795117E-5,c=1.99978116283334)}return-1!=b&&-1!=c&&0<a&&1E4>a?(b=b*Math.pow(a,c)/f,d===Ballistics.DragFunctions.GA?.925*b:b):-1};Ballistics.Windage=function(d,f,a,b){return 17.6*d*(b-a/f)};Ballistics.HeadWind=function(d,f){var a=Ballistics.DegtoRad(f);return Math.cos(a)*d};Ballistics.CrossWind=function(d,f){var a=Ballistics.DegtoRad(f);return Math.sin(a)*d};
Ballistics.SolveAll=function(d,f,a,b,c,v,l,m,s,h,q){var g=0,e=.5/c,t=0,n=0,w=0,p=0,x=0,u=0,k=0,r=u=0,y=0,z=Ballistics.HeadWind(s,h);s=Ballistics.CrossWind(s,h);h=Ballistics.GRAVITY*Math.cos(Ballistics.DegtoRad(l+m));l=Ballistics.GRAVITY*Math.sin(Ballistics.DegtoRad(l+m));n=c*Math.cos(Ballistics.DegtoRad(m));p=c*Math.sin(Ballistics.DegtoRad(m));y=-v/12;for(g=0;;g+=e){w=n;x=p;t=Math.pow(Math.pow(n,2)+Math.pow(p,2),.5);e=.5/t;u=Ballistics.retard(a,b,t+z);k=-(n/t)*u;u*=-(p/t);n=n+e*k+e*l;p=p+e*u+e*h;
    r/3>=d&&(k=Ballistics.Windage(s,c,r,g+e),q[d]={actualRange:r/3,drop:12*y,moa:-1*Ballistics.RadtoMOA(Math.atan(y/r)),time:g+e,windageInch:k,velocity:t},d++);r+=e*(n+w)/2;y+=e*(p+x)/2;if(Math.abs(p)>Math.abs(3*n))break;if(d>f)break}return d};
Ballistics.AtmCorrect=function(d,f,a,b,c){var v=function(a){return 1/(-4E-15*Math.pow(a,3)+4E-10*Math.pow(a,2)-3E-5*a+1)}(f);f=function(a,b){var c=-.0036*b+59;return(a-c)/(459.6+c)}(b,f);b=function(a,b,c){a=4E-6*Math.pow(a,3)-4E-4*Math.pow(a,2)+.0234*a-.2517;return b/(b-.3783*c*a)*.995}(b,a,c);return d*v*(1+f-(a-29.53)/29.53)*b};function precise_round(d,f){var a=d*Math.pow(10,f),b=Math.round(10*(a-parseInt(a)))/10;-.5==b&&(b=-.6);return a=Math.round(parseInt(a)+b)/Math.pow(10,f)};