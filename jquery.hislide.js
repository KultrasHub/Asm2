var chosen=5;
(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,
            interval: 2000,

        };
        $.extend(true, setting, options);
        var states = [
            { $zIndex: 1, width: 64, height: 36, top: 85, left: 80, $opacity: 0.15 },
            { $zIndex: 2, width: 96, height: 54, top: 73, left: -20, $opacity: 0.2 },
            { $zIndex: 3, width: 144, height: 81, top: 69, left: 0, $opacity: 0.3 },
            { $zIndex: 4, width: 176, height: 99, top: 59, left: 70, $opacity: 0.4 },
            { $zIndex: 5, width: 272, height: 153, top: 35, left: 150, $opacity: 0.7 },
            { $zIndex: 6, width: 448, height: 252, top: 0, left: 300, $opacity: 1 },
            { $zIndex: 5, width: 272, height: 153, top: 35, left: 700, $opacity: 0.7 },
            { $zIndex: 4, width: 176, height: 99, top: 59, left: 920, $opacity: 0.4 },
            { $zIndex: 3, width: 144, height: 81, top: 69, left: 720, $opacity: 0.3 },
            { $zIndex: 2, width: 96, height: 54, top: 73, left: 650, $opacity: 0.2},
            { $zIndex: 1, width: 64, height: 36, top: 85, left: 600, $opacity: 0.15 }
        ];
        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.next').on('click', function() {
          chosen=chosen+1;
          if(chosen>10)
          {
            chosen=0;
          }
            next();

        });
        $ele.find('.prev').on('click', function() {
          chosen=chosen-1;
          if(chosen<0)
          {
            chosen=10;
          }
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {

        });

        move();

        function move() {
          redirect();
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }
        function redirect()
        {
          jQuery('#main-play').attr('src',videoUrl);
          var videoId=["hFhuMGanjT8","e_TxH59MclA","5kas2jBObUY","1l3kKBEEQIo","9aipBufoJP8","_I51sqsDR-M","7Lyoiu2OVyU","rTxo-KZ-JbY","sS6O7Yp5xmg","oHBFD8cfXho","yuyVElFHjy8"];
          var videoUrl = 'https://www.youtube.com/embed/'+videoId[chosen];
          jQuery('#main-play').attr('src',videoUrl);
          var videoComment=[
            "Simon is an IT Manager working in the Data Systems field. His work relates to his staff 's activities, he also works with other managers such as project managers and business managers. His staff are IT professionals, while other managers will be working on other fields. He also has meetings with his staff to discuss their performance and has conversations with customers who are clients. His work is portable meaning he can work online at home or even when travelling. The hardest part of this position is probably sharing the same visions for all his staff. People usually have different solutions to approach the issues, therefore, creating a vision that can be spread among people can be challenging.",
            "He is a game Developer in the Programming field. Being a programmer he does not interact with people much and if he does, the people he interacts with should be his collaborators, boss whose jobs are IT professionals. He spends most of the time for programming in the working area, however, he could play video games at any time for refreshment. The problem comes from this too, he has to sit at work for a long period of time in other words he is living a sedentary lifestyle. This potential leads to health issues in the future.",
            "Mayuko is a software engineer. 20% of her time, she works with Product Managers, designers and her colleagues to get the right aim for the work. Then 70% of her time is for product development, she sets up plans, codes and fixes errors. The rest is for other conversations. There is no clue of where she works but being IT professional, people are more likely to work at anywhere of their choice. The challenge of this job is to have a precise plan and stick with it. Following plans and keeping on track of the work could be difficult because many incidents could occur like family issues that make you late for the deadlines.",
            "Dakota is an IT support specialist, he is responsible for answering emails and phone calls. He helps people with their IT problems by taking through steps and light them the way to perform certain tasks. His other responsibility is to keep track of his employees' work updated. He works with mostly other IT professionals. Like other IT professionals his job is also portable, therefore, he works anywhere he wants and it can be on a trip. The challenging aspect of his work is communication, finding the right explanation is not an easy task.",
            "Erin is a full stack developer at Purple, his work involves programming and meeting. Erin collaborates with designers, strategists and marketers. They are not IT Profession as they are from other departments. He also works in a team when he needs animations or the latest JavaScript feature. As the video suggests, he spends most of the time working in the office. Erin loves his job a lot, as he could work with other talented people. The challenge of this type of job is getting up to date. It is because we are living in a world where a high-tech feature could replace the old one in a single day.",
            "DevDuck job is game developer, he both works at office and at home for individual projects. Most of his work time is programming in front of the computer. He usually works with colleagues, however, he does work with the general community due to his individual project. Listening to players' feedback is always essential to any producers. The difficult aspect of this work is keeping motivation for private projects and responding to players.",
            "Cyber security professional has a sort of simple daily routine. Each day could be the same, sometimes there is a little difference for urgent situations. The man named himself for his Youtube channel is DC Cybersec. Each simple day begins with a cup of coffee and spends time walking with his dog around his department while brewing his coffee. Then, the Cyber Security goes straight to the workplace as soon as it starts at 8:00 AM. First thing is done every morning at work is about to go through all the emails to check for urgents, if there is any urgent, it could be done on the spot, if there is none, he will continue working with his colleagues who could be a cyber security. They are working on Security Matrix and trying to hack the matrix. The process could be analyzing what could harm the system, particularly what kind of threat it is, how many solutions there are, and what it will harm. Then, they put them on the scale level from 1 to 5 (harmless to mostly dangerous) and then coding to figure it out. Time in the morning is about to work and figure the problem. Time in the afternoon which is meeting, he meets his managers or clients to keep track on the problem they are working on to let them know that the process is going positively or negatively in order to handle the problem as soon as possible. Work ends at 3:30, which means 7 and a half hours working at the workplace. The rest of the day, he spends time with his friends and then go to rest. It sounds pretty much perfect and not any hurdles for the Professional. ",
            "This is video is about a woman IT Professional who is know working as business analyst. She starts a day from very soon in the morning which is 5:45 A.M to work out. Work out in the morning helps to release all endorphins and stress to free your brain and push up your energy for the new day starting. Taking care of her dogs and eating breakfast, checking for emergency emails to reply. Although it is just 8:00 A.M in the morning, she has already had a call from her clients. A busy day for the lady from 8 in the morning to 4 in the afternoon while she needs to be on phone contacting with different clients doing business in IT area. Other days, she can have meetings with her co-workers if she does not have any calls. It seems very exhausted for a business analyst in IT area while in the video the lady does not have any time for eating. Her lunch was done while she is on her talking on just a little piece of bread. Her work ends at 4:00 P.M and then she just goes straight home to take care of her dogs again. After arriving home, she still needs to have all her own work done before it is too late in the evening. Like responding emails, edit videos for Youtube channel, studying more for her jobs or something she likes. Not until doing household like cleaning kitchen with all the mess she left in the morning, she goes to bed before 11:00 P.M. Because all the IT professional always sleep before 11:00 PM if there is not any hurdle or urgent works need to be done.",
            "Josh from Josh and Katie youtube channel is a full-time Twitter Software Engineer in San Francisco for the past 18 months. According to his video the majority of his time he does his own work, aside from that the individuals that he interacts with the most are his coworkers during his working hours as they need assistance and sometimes he would also ask them for help. Josh spends most of his time in his working office from 9:30 am to 4:30 pm, there are some moments where he takes breaks for meals and moves himself to another working place just to get away from his familiar working office. When it comes to challenges that Josh has to tackle during his time working as a Twitter software engineer, the obstacles that he ever mentions is if Twitter has really provided him the opportunity to fulfill his initial programming goals or not. And by his initial goal, Josh’s passion is participating into a group project that can potentially create products that Josh can picture himself using on a daily basis.",
            "Clément Mihailescu has worked as a Google Software Engineer, an individual contributor specialize in working with the Google Cloud Platform, a cloud-related services that Google offers to the users such as computing, storaging, networking, etc.. Working from 11am till 7-8pm daily and that is included with dinner in his work place as going into the gym etc.. for days that he has a big project he would work until 10-11pm and based on the sourced video he mostly works with his fellow coworkers at Google for things like testing the codes, making sure that there are no errors in the code not only that but they have to make sure that the product follows the correct given guidelines. Most of the time Clément spends his time at his working office table and there are some flexible hours where he can get food, snacks or getting his scooter and rides around to relax at work. The challenges that Clément encountered during his time working in Google as well as other Google workers is most likely the performance of every single of the products that they generate. Even though it is not thoroughly mentioned, during those minutes Clément did mention how critical it is for Google software engineers to always think about the performance in their daily work and now that information is displayed for the upper management group. ",
            "DC CyberSec (His youtube name) is a cyber security specialist for the Government Contractor in Australia. Everyday he drives to work around 8:30 am in the morning and his working hour ends around 6:30pm. During the time he worked there were hardly any moments where he interacts with anyone inside his company, there is only one time he interacts with one of his higher workers to test out the codes that he made but the majority of his time he is off to do his own individual tasks in his office where he spends most of his time during work hours. Being a Cyber Security Specialist he has to interact with high risk related datas that are being sent from other working groups which is considered to be a very challenging task, not only that he has to detect the most vulnerable spot inside the program."
          ]
          document.getElementById('CommentOnITWork').innerHTML=videoComment[chosen];
        }
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }

})(jQuery);
