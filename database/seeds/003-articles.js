exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("articles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("articles").insert([
        {
          title: "All About Sleep: Why is it Important?",
          author: "Leah Perri",
          published_date: "November 5th, 2017",
          url:
            "https://www.sleepscore.com/all-about-sleep-why-is-it-important/",
          image:
            "https://gkng5olag22mpz1r551iq1dd-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/iStock-480396254.jpg",
          description:
            "Quality sleep is the foundation for good health. Catching the right amount of zzzs is vital for your body to rebuild tissues, replenish cells and reclaim lost energy.  Although you will spend about one-third of your life doing it, the importance of sleep is often ignored. This article provides you with some of the top reasons why sleep is so important."
        },

        {
          title: "7 Essential Oils For Relaxation And Better Sleep",
          author: "Dr. Michael Breus",
          published_date: "June 12, 2018",
          url:
            "https://thesleepdoctor.com/2018/06/12/7-essential-oils-for-relaxation-and-better-sleep/",
          image:
            "https://thesleepdoctor.com/wp-content/uploads/2018/06/7-Essentail-Oils-for-Sleep-Blog-Pic-1080x675.jpg",
          description:
            "Scents are often overlooked as a tool for better sleep. Inexpensive and easy to introduce to a daily and nightly routine, there are an array of essential oils that can help you relax, mentally and physically, and make it easier for you to fall asleep and sleep more soundly. In this article Dr. Michael Breus shares with you the essential oils he recommends to his patients to help improve their sleep, relieve stress, lift mood, and boost performance. He also talks about what science tells us about the benefits these aromatic oils can have for sleep and health."
        },

        {
          title: "8 Stretches to Do Before Bed",
          author: "Emily Cronkleton",
          published_date: "October 31, 2018",
          url: "https://www.healthline.com/health/stretching-before-bed",
          image:
            "https://ana-heart.com/blog/wp-content/uploads/2017/07/7-relaxing-yoga-poses-better-sleep-800x480.jpg",
          description:
            "Stretching also offers potential physical benefits, helping to relieve muscle tension and prevent sleep-disrupting cramps. Here are eight stretches to add to your nightly routine!"
        },

        {
          title: "10 Things You Should Never Do Before Bed",
          author: "Sheiresa Ngo",
          published_date: "April 12, 2018",
          url:
            "https://www.cheatsheet.com/health-fitness/things-you-should-never-do-before-bed.html/",
          image:
            "https://www.cheatsheet.com/wp-content/uploads/2016/06/girl-eating-biscuit-in-her-bed-640x459.jpg",
          description:
            "Have you been having trouble getting a good night/s sleep? You may be unknowingly engaging in activities that are making restful sleep more difficult. Here are 10 behaviors to avoid before bedtime!"
        },

        {
          title: "The 6 Best Bedtime Teas That Help You Sleep",
          author: "Kaitlyn Berkheiser",
          published_date: "February 18, 2018",
          url: "https://www.healthline.com/nutrition/teas-that-help-you-sleep",
          image:
            "https://sarahblooms.com/wp-content/uploads/2017/07/Best-Herbs-for-Sleep-Herbal-Tea-Recipes-to-Help-You-Fall-Asleep-FAST.jpg",
          description:
            "Herbal teas are popular beverage choices when it comes time to relax and unwind. For centuries, they have been used around the world as natural sleep remedies. This article explores 6 of the best bedtime teas."
        },

        {
          title: "8 Relaxing Sounds to Help You Sleep",
          author: "Caitlin Reynolds",
          published_date: "September 14, 2018",
          url: "https://www.alaskasleep.com/blog/8-relaxing-sounds-to-help-get",
          image:
            "https://www.alaskasleep.com/hs-fs/hubfs/waves.jpg?width=315&name=waves.jpg",
          description:
            "Noise at night can be disruptive—or it can lead to better rest. These are some of the most potent sounds for sleep."
        },

        {
          title: "A Meditation for Easing Into Sleep",
          author: "Mark Bertin",
          published_date: "October 4, 2018",
          url:
            "https://www.mindful.org/a-mindfulness-practice-for-better-sleep/",
          image:
            "https://cdn.mindful.org/stars.png?q=80&fm=jpg&fit=crop&w=1400&h=875",
          description:
            "The more you try to force sleep, the less likely you are to achieve it. Explore this guided meditation to let go of stubborn thoughts and get a full night's rest."
        },

        {
          title: "Sleep Needs: What to Do If You're Not Getting Enough Sleep",
          author: "Melinda Smith, Lawrence Robinson, and Robert Segal",
          published_date: "October 2018",
          url:
            "https://www.helpguide.org/articles/sleep/sleep-needs-get-the-sleep-you-need.htm/",
          image:
            "https://www.helpguide.org/wp-content/uploads/2018/11/man-woman-alarm-clock-500.jpg",
          description:
            "Long-term, chronic sleep loss can wreak havoc on your mental and physical health. By understanding your nightly sleep needs and how to bounce back from sleep loss, you can finally get on a healthy sleep schedule and improve the quality of your waking life."
        },
        {
          title: "How Much Sleep Do You Really Need to Feel Rested?",
          author: "Brandon Peters, MD",
          published_date: "December 31, 2018",
          url:
            "https://www.verywellhealth.com/how-much-sleep-do-i-need-3014995",
          image:
            "https://www.verywellhealth.com/thmb/HUzL8IJINhe8WtC8dj7jEaCcO-o=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/iStock-507952433-58b995345f9b58af5c6476d6.jpg",
          description:
            "We’ve all been told that we should get 8 hours of sleep per night, but this information is an average and might not be a perfect fit for everyone. Some people may need more sleep and others less, and our needs may actually change through the years."
        },

        {
          title: "Starfish or Freefall? What Your Sleep Position Can Tell You",
          author: "Terry Cralle",
          published_date: "April 14, 2017",
          url: "https://bettersleep.org/better-sleep/sleep-positions/",
          image:
            "https://www.coastalorthoteam.com/hs-fs/hubfs/Blog_photos/sleep%20postions.jpg?width=818&name=sleep%20postions.jpg",
          description:
            "There are three main sleeping positions: side, back, and stomach, with variables for each. Sleep specialists recommend sleeping on your side in order to rest more comfortably and decrease the likelihood of interrupted sleep."
        },

        {
          title:
            "How to Sleep Better: Simple Steps to Getting a Good Night's Sleep",
          author: "Melinda Smith, Lawrence Robinson, and Robert Segal",
          published_date: "October 2018",
          url:
            "https://www.helpguide.org/articles/sleep/getting-better-sleep.htm/",
          image:
            "https://www.helpguide.org/wp-content/uploads/2018/11/woman-in-bed-with-comforter-500.jpg",
          description:
            "Many of us regularly toss and turn at night, struggling to get the sleep we need. There is a solution. Making simple but important changes to your daytime routine and bedtime habits can have a profound impact on how well you sleep, leaving you feeling mentally sharp, emotionally balanced, and full of energy all day long."
        },

        {
          title: "27 Easy Ways to Sleep Better Tonight",
          author: "Kissairis Munoz",
          published_date: "NOVEMBER 2, 2015",
          url:
            "https://greatist.com/happiness/27-easy-ways-sleep-better-tonight",
          image:
            "https://greatist.com/sites/default/files/styles/article_main/public/MORE-SLEEP_COMFORTABLE-ENVIRONMENT.jpg?itok=8KWTN5Qd%20564w",
          description:
            "Over time, lack of sleep can contribute to obesity, diabetes, and—of course—a chronic bad attitude. So whether or not you're a morning person, check out our list on how to get better sleep. You can thank us in the morning."
        },

        {
          title:
            "Learn How to Sleep All Night Long Naturally, Without Waking Up",
          author: "MaryGrace Taylor",
          published_date: "July 8, 2015",
          url: "https://www.amerisleep.com/blog/sleep-all-night-naturally/",
          image:
            "https://www.amerisleep.com/blog/wp-content/uploads/2015/07/pexels-photo-813269.jpeg",
          description:
            "How can you nip your sleep problems in the butt before they end up wrecking your health—and your life? Here’s everything you need to know for how to sleep through the night naturally and wake up refreshed in the morning."
        },

        {
          title: "What Exactly Is White Noise And How Does It Help You Sleep?",
          author: "Tomorrow Team",
          published_date: "July 17, 2018",
          url: "https://www.tomorrowsleep.com/magazine/white-noise",
          image:
            "https://i0.wp.com/www.tomorrowsleep.com/magazine/wp-content/uploads/2018/07/Benefits-of-White-Noise.jpg?w=800&ssl=1",
          description:
            "Some people are lucky enough to fall asleep in spite of all the noise in the background. Others are not so fortunate.  If you are a light sleeper you may find that even the smallest sound will wake you up and disrupt your sleep. If you are looking for a way to alleviate this, then introducing white noise at bedtime may just be the solution that you are looking for. What is white noise, anyway? Let’s find out."
        },

        {
          title: "17 Proven Tips to Sleep Better at Night",
          author: "Rudy Mawer",
          published_date: "November 2, 2018",
          url: "https://www.healthline.com/nutrition/17-tips-to-sleep-better",
          image:
            "https://cdn.vox-cdn.com/thumbor/cBkVMt9XGwuAE5KUch_-ak76gWI=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/60994965/sleep_copy.0.jpg",
          description:
            "If you want to optimize your health or lose weight, then getting a good night's sleep is one of the most important things you can do. Here are 17 evidence-based tips to sleep better at night."
        },

        {
          title: "Listening to Your Sleep Cycles: A Wellness Guide",
          author: "Molly Livingston",
          published_date: "November 22, 2017",
          url: "https://www.tomorrowsleep.com/magazine/sleep-cycle-stages",
          image:
            "https://www.mattressclarity.com/wp-content/uploads/2018/12/sleepstages-01.jpg",
          description:
            "Why should you care about the science behind snoozing? Understanding your sleep cycles allows you to refine and perfect your rest. It’s part of being sleep conscious. Here’s exactly what happens during each sleep cycle — and why it matters for your tomorrow."
        }
      ]);
    });
};
