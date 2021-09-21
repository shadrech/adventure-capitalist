import * as index from "./index"
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.default()
        }
    
        expect(callFunction).not.toThrow()
    })
})
