const onUnfollowButtonClick = () => {
  // Sử dụng querySelectorAll để lấy tất cả button unfollow
  const unfollowButtons = document.querySelectorAll(
    'button[data-e2e="feed-follow"]'
  ) as NodeListOf<HTMLButtonElement>;

  // Click vào tất cả button unfollow
  unfollowButtons.forEach((element: HTMLButtonElement) => {
    console.log("Clicking unfollow button:", element);
    element.click();

    setTimeout(() => {
      document.dispatchEvent(
        new KeyboardEvent("keydown", {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
          bubbles: true, // Đảm bảo sự kiện nổi lên window
        })
      );
      console.log("Dispatched ArrowDown event");
    }, 1000);
  });
};

onUnfollowButtonClick();
