import {
  failHotNovelsRequest,
  receiveHotNovels,
  requestHotNovels
} from "../../../../redux/actions/action-creators/hotNovels";
import {
  FETCH_HOT_NOVELS_FAILURE,
  FETCH_HOT_NOVELS_REQUEST,
  FETCH_HOT_NOVELS_SUCCESS
} from "../../../../redux/actions/action-types";

describe("Hot Novels Request", () => {
  it("Should have type FETCH_HOT_NOVELS_REQUEST", () => {
    const action = requestHotNovels();
    expect(action).toHaveProperty("type", FETCH_HOT_NOVELS_REQUEST);
  });
});

describe("Hot Novels Receive", () => {
  it("Should have type FETCH_HOT_NOVELS_SUCCESS", () => {
    const action = receiveHotNovels();
    expect(action).toHaveProperty("type", FETCH_HOT_NOVELS_SUCCESS);
  });

  it("Should have hotNovels key", () => {
    const action = receiveHotNovels();
    expect(action).toHaveProperty("hotNovels");
  });

  it("Should have hotNovels be an empty list if not given an argument", () => {
    const action = receiveHotNovels();
    expect(action.hotNovels).toMatchObject([]);
  });

  it("Should have hotNovels be the same as the argument", () => {
    const novels = [{ title: "Overlord" }];
    const action = receiveHotNovels(novels);
    expect(action.hotNovels).toMatchObject(novels);
  });
});

describe("Hot Novels Failure", () => {
  it("Should have type FETCH_HOT_NOVELS_FAILURE", () => {
    const action = failHotNovelsRequest();
    expect(action).toHaveProperty("type", FETCH_HOT_NOVELS_FAILURE);
  });
});
