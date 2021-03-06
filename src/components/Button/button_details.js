import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { BiArrowToRight, BiExport, BiPrinter } from "react-icons/bi";
import { BsCloudUpload, BsCloudDownload } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { GiExpand } from "react-icons/gi";
import { GrClear, GrAddCircle } from "react-icons/gr";
import { MdVerticalAlignCenter } from "react-icons/md";
import { VscChromeRestore } from "react-icons/vsc";

import * as AppFunc from "../App/App_functions";
import * as GroupFunc from "../Group/Group_functions";

export const GLOBAL_BUTTONS = (sync_node, group_limit, setTabTotal, setGroups) => {
  return [
    {
      id: "options-btn",
      classes: "mx-auto d-block",
      translate: AppFunc.translate("settings"),
      btnFn: () => window.location.assign("/settings/settings.html"),
      icon: <FiSettings color="black" size="1.6rem" />,
    },
    {
      id: "open-all-btn",
      classes: "mx-1",
      translate: AppFunc.translate("openAll"),
      btnFn: () => AppFunc.openAllTabs(),
      icon: <GiExpand color="black" />,
    },
    {
      id: "export-btn",
      classes: "mx-1",
      translate: AppFunc.translate("exportJSON"),
      btnFn: () => AppFunc.exportJSON(),
      icon: <BiExport color="black" size="1.4rem" />,
    },
    {
      id: "sync-write-btn",
      classes: "mx-1",
      translate: AppFunc.translate("sync").substr(0, 4) + " " + AppFunc.translate("write"),
      btnFn: () => AppFunc.syncWrite(sync_node),
      icon: <BsCloudUpload color="black" size="1.5rem" />,
    },
    {
      id: "delete-all-btn",
      classes: "mx-1",
      translate: AppFunc.translate("deleteAll"),
      btnFn: () => AppFunc.deleteAllGroups(setTabTotal, setGroups),
      icon: <GrClear color="black" />,
    },
    {
      id: "temp",
    },
    {
      id: "sync-read-btn",
      classes: "mx-1",
      translate: AppFunc.translate("sync").substr(0, 4) + " " + AppFunc.translate("read"),
      btnFn: () => AppFunc.syncRead(sync_node, setGroups, setTabTotal),
      icon: <BsCloudDownload color="black" size="1.5rem" />,
    },
    {
      id: "print-btn",
      classes: "mt-2 mx-auto d-block",
      translate: AppFunc.translate("print"),
      btnFn: () => window.print(),
      icon: <BiPrinter color="black" size="1.5rem" />,
    },
    {
      id: "add-group-btn",
      classes: "mt-2 mx-auto d-block",
      translate: AppFunc.translate("addGroup"),
      btnFn: () => AppFunc.addGroup(group_limit, setGroups),
      icon: <GrAddCircle color="black" size="1.5rem" />,
    },
  ];
};

export const GROUP_TITLE_BUTTONS = (hidden, setTabTotal, setGroups) => {
  return [
    {
      classes: "show-hide-btn btn-in-group-title",
      translate: hidden ? AppFunc.translate("showTabs") : AppFunc.translate("hideTabs"),
      clickFn: (e) => GroupFunc.toggleGroup(e, hidden, setGroups),
      icon: <AiOutlineMinus />,
    },
    {
      classes: "open-group-btn btn-in-group-title",
      translate: AppFunc.translate("openGroup"),
      clickFn: (e) => GroupFunc.openGroup(e),
      icon: <VscChromeRestore />,
    },
    {
      classes: "delete-group-btn btn-in-group-title",
      translate: AppFunc.translate("deleteGroup"),
      clickFn: (e) => GroupFunc.deleteGroup(e, setTabTotal, setGroups),
      icon: <AiOutlineClose />,
    },
  ];
};

export const MERGE_BUTTONS = (id) => {
  return [
    {
      classes: "merge-btn btn-for-merging btn-outline-dark",
      translate: AppFunc.translate("mergeALLtabs"),
      clickFn: () => GroupFunc.sendMessage({ msg: "all", id }),
      icon: <MdVerticalAlignCenter color="black" size="1.3rem" />,
    },
    {
      classes: "merge-left-btn btn-for-merging btn-outline-dark",
      translate: AppFunc.translate("mergeLEFTtabs"),
      clickFn: () => GroupFunc.sendMessage({ msg: "left", id }),
      icon: <BiArrowToRight color="black" size="1.3rem" />,
    },
    {
      classes: "merge-right-btn btn-for-merging btn-outline-dark",
      translate: AppFunc.translate("mergeRIGHTtabs"),
      clickFn: () => GroupFunc.sendMessage({ msg: "right", id }),
      icon: <BiArrowToRight color="black" size="1.3rem" />,
    },
  ];
};
