const reels = [
    {
        username: "mahi7781",
        likeCount: 14820,
        isLiked: true,
        commentCount: 423,
        shareCount: 92,
        isFollowed: true,
        caption: "Thanks a lot for all your warm wishes, a glimpse of what I did on on my birthday.",
        video: "./reels/msd.mp4",
        isMuted: true,
        userprofile: "https://i.pinimg.com/736x/20/e0/62/20e062c5520e831e05a74316dec869de.jpg"
    },

    {
        username: "azit_rana0",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "मुझे लगता है कि पानी को देखना ही जीवन है।🌧️",
        video: "./reels/azit.mp4",
        isMuted: true,
        userprofile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85C6jn1SG13KpXiNxxK5JyLoQZl_JtV7VTQ&s"
    },

    {
        username: "sheryians",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: true,
        caption: "You can Now CHEAT in Meta Interviews.",
        video: "./reels/shery.mp4",
        isMuted: true,
        userprofile: "https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png"
    },

    {
        username: "channaiipl",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "THALA Aivan eranga 🦁🔥",
        video: "./reels/channai.mp4",
        isMuted: true,
        userprofile: "https://media.crictracker.com/media/attachments/2022/02/Chennai-Super-Kings-logo.jpg"
    },

    {
        username: "ayodhyadhamhai",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "Jai Shree Ram - जय श्री राम 🚩",
        video: "./reels/jaishreeram.mp4",
        isMuted: true,
        userprofile: "https://akm-img-a-in.tosshub.com/indiatoday/images/video/202511/ayodhya-ram-temple-252638207-3x4.jpg?VersionId=xTRmItNlGzcYoEdQVDp5hFxRJIhDQqL2"
    },

    {
        username: "bhajanmarg",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "पूज्य महाराज जी के संग गिरिराज जी की परिक्रमा।",
        video: "./reels/bhajanmarg.mp4",
        isMuted: true,
        userprofile: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/2024/12/28/3550640-10.jpg"
    },

    {
        username: "apnakoderma",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "राधेकृष्णा प्रेम मंदिर कोडरमा",
        video: "./reels/premmandir.mp4",
        isMuted: true,
        userprofile: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBefXzlA4M2kCUYzy1zc8uKXH_uO-2nfnOGQ&s"
    },

    {
        username: "parasnathhill",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "Parasnath hill Giridih Highest peak of Jharkhand 📍",
        video: "./reels/parasnathhill.mp4",
        isMuted: true,
        userprofile: "https://dy3rma73kowlp.cloudfront.net/uploads/2025/04/Parasnath-Hill.jpg"
    },

    {
        username: "chaipaani",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Nothing like a hot cup of chai on a rainy day ☕🌧️",
        video: "./reels/chaipaani.mp4",
        isMuted: true,
        userprofile: "https://www.jiomart.com/images/product/original/rvunbf16ej/milton-stainless-steel-red-chaipani-bottle-820-ml-product-images-orvunbf16ej-p603459732-3-202308011843.jpg?im=Resize=(420,420)"
    },

    {
        username: "wildlife.azit",
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "Alexandrine parakeet And Rose-ringed parakeet",
        video: "./reels/wildgreen.mp4",
        isMuted: true,
        userprofile: "https://cdn.pixabay.com/photo/2017/07/24/19/57/tiger-2535888_640.jpg"
    }
];

// const allReels = document.querySelector(".all-reels");

// function addData() {

//     let addReels = "";

//     reels.forEach((elem, idx) => {
//         addReels += `<div class="reel">
//                     <video loop autoplay ${elem.isMuted ? "muted" : ""} src="${elem.video}"></video>
//                     <div id=${idx} class="mute">
//                     ${elem.isMuted ? '<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'}
//                     </div>
//                     <div class="bottom">
//                         <div class="user">
//                             <img src="${elem.userprofile}" alt="">
//                             <h4>${elem.username}</h4>
//                             <button id="${idx}" class="follow">${elem.isFollowed ? "Unfollow" : "Follow"}</button>
//                         </div>
//                         <h3>${elem.caption}</h3>
//                     </div>

//                     <div class="right">
//                         <div id="${idx}" class="like">
//                             <h4 class="like-icon"> ${elem.isLiked ? "<i class='ri-heart-3-fill love-fill'></i>" : "<i class='ri-heart-3-line'></i>"} </h4>
//                             <h6>${elem.likeCount}</h6>
//                         </div>
//                         <div id="${idx}" class="comment">
//                             <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
//                             <h6>${elem.commentCount}</h6>
//                         </div>
//                         <div id="${idx}" class="share">
//                             <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
//                             <h6>${elem.shareCount}</h6>
//                         </div>
//                         <div class="menu">
//                             <h4 class="share-icon"><i class="ri-more-2-fill"></i></h4>
//                         </div>
//                     </div>
//                 </div>`;
//     });

//     allReels.innerHTML = addReels;
// }

// addData();

// allReels.addEventListener("click", (dets) => {

//     if (dets.target.className === "like") {
//         if (!reels[dets.target.id].isLiked) {
//             reels[dets.target.id].likeCount++;
//             reels[dets.target.id].isLiked = true;
//         } else {
//             reels[dets.target.id].likeCount--;
//             reels[dets.target.id].isLiked = false;
//         }
//         addData();
//     }

//     if (dets.target.className === "follow") {
//         if (!reels[dets.target.id].isFollowed) {
//             reels[dets.target.id].isFollowed = true;
//         } else {
//             reels[dets.target.id].isFollowed = false;
//         }
//         addData();
//     }

//     if (dets.target.className === "mute") {
//         if (!reels[dets.target.id].isMuted) {
//             reels[dets.target.id].isMuted = true;
//         } else {
//             reels[dets.target.id].isMuted = false;
//         }
//         addData();
//     }

//     if (dets.target.className === "comment") {
//         reels[dets.target.id].commentCount++;
//         addData();
//     }

//     if (dets.target.className === "share") {
//         reels[dets.target.id].shareCount++;
//         addData();
//     }

// });







const allReels = document.querySelector(".all-reels");

// observer pehle declare karo
let observer;

function addData() {
  let html = "";

  reels.forEach((elem, idx) => {
    html += `
      <div class="reel" data-index="${idx}">
        <video src="${elem.video}" loop autoplay muted></video>

        <div class="mute" data-index="${idx}">
          <i class="ri-volume-up-fill"></i>
        </div>

        <div class="bottom">
          <div class="user">
            <img src="${elem.userprofile}" />
            <h4>${elem.username}</h4>
            <button class="follow" data-index="${idx}">
              ${elem.isFollowed ? "Unfollow" : "Follow"}
            </button>
          </div>
          <h3>${elem.caption}</h3>
        </div>

        <div class="right">
          <div class="like" data-index="${idx}">
            <h4 class="like-icon">
              ${elem.isLiked
                ? "<i class='ri-heart-3-fill love-fill'></i>"
                : "<i class='ri-heart-3-line'></i>"}
            </h4>
            <h6>${elem.likeCount}</h6>
          </div>

          <div class="comment" data-index="${idx}">
            <h4><i class="ri-chat-3-line"></i></h4>
            <h6>${elem.commentCount}</h6>
          </div>

          <div class="share" data-index="${idx}">
            <h4><i class="ri-share-forward-line"></i></h4>
            <h6>${elem.shareCount}</h6>
          </div>
        </div>
      </div>
    `;
  });

  allReels.innerHTML = html;

  observeReels();
}

// scroll observer
let observe;
function observeReels() {
  if (observer) observer.disconnect();

    observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const reel = entry.target;
        const video = reel.querySelector("video");

        // Pause & mute all videos
        document.querySelectorAll(".reel video").forEach(v => {
          v.pause();
          v.muted = true;
        });

        // Play current video
        video.muted = false;
        video.play();
      });
    },
    { threshold: 0.6 }
  );

  document.querySelectorAll(".reel").forEach(reel => observer.observe(reel));
}

// click
allReels.addEventListener("click", (e) => {

  // mute
  const muteBtn = e.target.closest(".mute");
  if (muteBtn) {
    const idx = muteBtn.dataset.index;
    const video = document.querySelectorAll(".reel video")[idx];

    video.muted = !video.muted;

    muteBtn.innerHTML = video.muted
      ? '<i class="ri-volume-mute-fill"></i>'
      : '<i class="ri-volume-up-line"></i>';
    return;
  }

  // like
  const likeBtn = e.target.closest(".like");
  if (likeBtn) {
    const idx = likeBtn.dataset.index;
    reels[idx].isLiked = !reels[idx].isLiked;
    reels[idx].likeCount += reels[idx].isLiked ? 1 : -1;
    addData();
    return;
  }

  // comment
  const commentBtn = e.target.closest(".comment");
  if (commentBtn) {
    const idx = commentBtn.dataset.index;
    reels[idx].commentCount++;
    addData();
    return;
  }

  // share
  const shareBtn = e.target.closest(".share");
  if (shareBtn) {
    const idx = shareBtn.dataset.index;
    reels[idx].shareCount++;
    addData();
    return;
  }

  // follow
  const followBtn = e.target.closest(".follow");
  if (followBtn) {
    const idx = followBtn.dataset.index;
    reels[idx].isFollowed = !reels[idx].isFollowed;
    addData();
  }
});

// initial load
addData();



