import { QuartzFilterPlugin } from "../types"

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    // const draftFlag: boolean = vfile.data?.frontmatter?.draft || false
    // return !draftFlag
    const publishFlag: boolean = vfile.data?.frontmatter?.publish || false
    return publishFlag
  },
})
