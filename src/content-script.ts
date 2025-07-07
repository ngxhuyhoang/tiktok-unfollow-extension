import { sleep } from "./utils";

// const nextPath =
//   "m24 27.76 13.17-13.17a1 1 0 0 1 1.42 0l2.82 2.82a1 1 0 0 1 0 1.42L25.06 35.18a1.5 1.5 0 0 1-2.12 0L6.59 18.83a1 1 0 0 1 0-1.42L9.4 14.6a1 1 0 0 1 1.42 0L24 27.76Z";

const onUnfollowButtonClick = async () => {
  while (true) {
    console.log("Bắt đầu quá trình Unfollow...");

    await sleep(3000); // Đợi 1 giây trước khi thực hiện hành động

    // Sử dụng querySelectorAll để lấy tất cả button unfollow
    const unfollowButton = document.querySelector(
      'button[data-e2e="feed-follow"]'
    ) as HTMLButtonElement;

    console.log("Tìm thấy nút Unfollow:", unfollowButton);

    if (!unfollowButton) {
      console.log("Không còn nút Unfollow nào, kết thúc.");
      break;
    }

    // Click vào tất cả button unfollow
    unfollowButton.click();
    console.log("Đã click vào nút Unfollow");

    await sleep(1000); // Đợi 1 giây để đảm bảo các thay đổi đã được thực hiện

    location.reload(); // Tải lại trang để cập nhật danh sách người theo dõi

    // const nextButtons = document.querySelectorAll(
    //   'button.TUXButton--secondary.action-item[aria-disabled="false"]'
    // ) as NodeListOf<HTMLButtonElement>;

    // nextButtons.forEach((nextButton: HTMLButtonElement) => {
    //   const svgElement = nextButton.querySelector("svg");
    //   const path = svgElement?.querySelector("path");
    //   if (path && path.getAttribute("d") === nextPath) {
    //     nextButton.click();
    //   }
    // });

    await sleep(2500); // Đợi 2.5 giây sau khi click
  }
};

onUnfollowButtonClick();
