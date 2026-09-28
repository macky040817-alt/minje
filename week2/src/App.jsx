import { useState } from "react";
import "./App.css";

function App() {
  const username = "조민제";
  const location = "홍익대학교 T동 멀티미디어실";
  const likeCount = 40817;
  const caption = "이게 React?";

  const postImages = [
    "/images/picasso.png",
    "/images/eden-avatar.png",
  ];

  const [isReposted, setIsReposted] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <main className="feed">
      <article className="post">

        <header className="profile">
          <img
            className="profile-image"
            src="/images/gdg-avatar.png"
            alt="프로필"
          />

          <div className="profile-text">
            <strong>{username}</strong>
            <span>{location}</span>
          </div>

          <button className="more-button">•••</button>
        </header>


        {/* 게시글 이미지 */}
        <div className="post-image-container">

          <img
            className="post-image"
            src={postImages[currentImage]}
            alt={`게시글 이미지 ${currentImage + 1}`}
          />

          {/* 다음 사진 버튼 */}
          {currentImage < postImages.length - 1 && (
            <button
              className="image-arrow right"
              onClick={() => setCurrentImage(currentImage + 1)}
              aria-label="다음 사진"
            >
              ›
            </button>
          )}

          {/* 이전 사진 버튼 */}
          {currentImage > 0 && (
            <button
              className="image-arrow left"
              onClick={() => setCurrentImage(currentImage - 1)}
              aria-label="이전 사진"
            >
              ‹
            </button>
          )}

          {/* 인스타그램 스타일 페이지 표시 */}
          <div className="image-dots">
            {postImages.map((_, index) => (
              <span
                key={index}
                className={index === currentImage ? "active" : ""}
              />
            ))}
          </div>

        </div>


        <section className="content">

          <div className="actions">

            <div>

              {/* 좋아요 */}
              <button aria-label="좋아요">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
              </button>

              {/* 댓글 */}
              <button aria-label="댓글">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 11.6a9.2 9.2 0 1 0-4.8 8.1L22 22l-1.9-5.7a9.1 9.1 0 0 0 .9-4.7Z" />
                </svg>
              </button>

              {/* DM */}
              <button aria-label="DM 보내기">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="m22 2-8.5 20-4-11L1 2h21ZM9.5 11 22 2" />
                </svg>
              </button>

              {/* 리포스트 */}
              <button
                className={isReposted ? "reposted" : ""}
                aria-label="리포스트"
                onClick={() => setIsReposted(!isReposted)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 3l4 4-4 4" />
                  <path d="M3 7h18" />
                  <path d="M7 21l-4-4 4-4" />
                  <path d="M21 17H3" />
                </svg>
              </button>

            </div>

            {/* 저장 */}
            <button aria-label="저장">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 2h16v20l-8-6-8 6V2Z" />
              </svg>
            </button>

          </div>


          <p className="likes">
            좋아요 <strong>{likeCount.toLocaleString()}</strong>개
          </p>

          <p className="caption">
            <strong>{username}</strong>
            {caption}
          </p>

        </section>

      </article>
    </main>
  );
}

export default App;