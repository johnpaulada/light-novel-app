import {
  failNovelRequest,
  receiveNovel,
  requestNovel
} from "../../../../redux/actions/action-creators/selectedNovel";
import {
  GET_NOVEL_FAILURE,
  GET_NOVEL_REQUEST,
  GET_NOVEL_SUCCESS
} from "../../../../redux/actions/action-types";

describe("Hot Novels Request", () => {
  it("Should have type GET_NOVEL_REQUEST", () => {
    const action = requestNovel();
    expect(action).toHaveProperty("type", GET_NOVEL_REQUEST);
  });
});

describe("Hot Novels Receive", () => {
  it("Should have type GET_NOVEL_SUCCESS", () => {
    const action = receiveNovel();
    expect(action).toHaveProperty("type", GET_NOVEL_SUCCESS);
  });

  it("Should have selectedNovel key", () => {
    const action = receiveNovel();
    expect(action).toHaveProperty("selectedNovel");
  });

  it("Should have selectedNovel be null if no argument", () => {
    const action = receiveNovel();
    expect(action.selectedNovel).toBeNull();
  });

  it("Should have selectedNovel with the value given to it", () => {
    const novel = { title: "Overlord" };
    const action = receiveNovel(novel);
    expect(action.selectedNovel).toMatchObject(novel);
  });
});

describe("Hot Novels Failure", () => {
  it("Should have type GET_NOVEL_FAILURE", () => {
    const action = failNovelRequest();
    expect(action).toHaveProperty("type", GET_NOVEL_FAILURE);
  });
});
