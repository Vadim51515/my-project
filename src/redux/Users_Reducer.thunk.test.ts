import { followUnfollowFlou } from './Users_Reducer';
import { ResultCodeEnum, UpdateStatusType, usersAPI } from './../api/api';
jest.mock('./../api/api')
const usersAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: UpdateStatusType = {
    resultCode:ResultCodeEnum.Success,
    messages:[],
    data:{}
}
const dispatchMock = jest.fn()
const getStateMock = jest.fn()

beforeEach(() => {
     dispatchMock.mockClear()
     getStateMock.mockClear()
    usersAPIMock.follow.mockClear()
})
usersAPIMock.follow.mockReturnValue(Promise.resolve(result))
test("", () => {
    const thunk = followUnfollowFlou(354, true)

    thunk(dispatchMock,getStateMock,{})

    expect(dispatchMock).toBeCalledTimes(3)
})