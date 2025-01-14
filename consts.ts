const convert = require("convert-units");
import * as TelegramBot from "node-telegram-bot-api";

import * as PhotoData from "./photoData";

const toMB = (byte: number) => convert(byte)
                                .from("B")
                                .to("MB")
                                .toFixed(2);

export const ADDED_INTO_QUEUE = "已加入序列";
export const ALREADY_IN_QUEUE = "已在序列中";
export const BANNED_PHOTO = "图片已被封禁";
export const BANNED_TEXT = (charId: number, fileId: string) => `Receive Ban Queue for ${charId} to ${fileId}.`;
export const DELETE_PHOTO = "图片已被删除";
export const DELETE_TEXT = (charId: number, fileId: string) => `Receive delete Queue for ${charId} to ${fileId}.`;
export const CAN_NOT_CHANGE_ALL_ADMINS_PHOTO = "I can't change group photo if all members are admin!";
export const CAN_NOT_CHANGE_PHOTO = "I can't change your photo!";
export enum COMMANDS {
    SET_PAUSED = "pause",
    SET_RESUMED = "resume",
    SET_INTERVAL = "setinterval",
    NEXT_PHOTO = "next",
    QUEUE_STATUS = "queue",
    BAN = "ban",
    UNBAN = "unban",
    DELETE = "delete",
}
export const COMMANDS_ADMINS_ONLY = [
    COMMANDS.SET_PAUSED,
    COMMANDS.SET_RESUMED,
    COMMANDS.SET_INTERVAL,
    COMMANDS.NEXT_PHOTO,
    COMMANDS.BAN,
    COMMANDS.UNBAN,
    COMMANDS.DELETE,
];
export const CACHE_FILE_FOLDER = ".group_cache";
export const CACHE_DATA_FILENAME = "data.yaml";
export const CACHE_CREATED_FOLDER = (folder: string) => `Created cache folder at ${folder}`;
export const CACHE_DOWNLOADED = (filename: string, dest: string) => `Downloaded as ${filename} at ${dest}`;
export const CACHE_DOWNLOADED_RENAME_ERROR = (filename: string, dest: string, error: Error) =>
    `${CACHE_DOWNLOADED(filename, dest)}, but rename file has exception -> ${error.message}`;
export const CACHE_DOWNLOADING = (dest: string) => `Downloading cache into ${dest}`;
export const CACHE_DOWNLOAD_ERROR = (dest: string, reason: string) => `Cache download with error occurred for ${dest} as ${reason}`;
export const CACHE_DOWNLOAD_IGNORE = (dest: string) => `Ignore exists file of ${dest}`;
export const CACHE_FOLDER_CHECKED = (folder: string, files: string[]) => `Cache folder exists at ${folder} with ${files.length} files`;
export const CHAT_DISABLED_BY_SYSTEM = (chatId: number, reason: string) => `Chat \`${chatId}\` disabled because \`${reason}\``;
export const CONFIG_FILE_PATH = "./config.yaml";
export const DATA_FILE_JSON_PATH = "./data.json";
export const DATA_FILE_PATH = "./data.yaml";
export const DISABLED_PIXIV_ACCOUNT = "There not configurated for pixiv API account";
export const ENABLED_PIXIV_ACCOUNT = (account: string, refreshToken: string) =>
    `Pixiv API Account Enabled => \`${account}\` with refresh token => \`${refreshToken}\`.`;
export const ENABLING_REFRESHED_PIXIV_ACCOUNT = (account: string, refreshToken: string) =>
    `Re-Enabling Pixiv API Account => \`${account}\` by refresh token => \`${refreshToken}\`.`;
export const ENABLING_PIXIV_ACCOUNT = (account: string) => `Enabling Pixiv API Account => \`${account}\`.`;
export const FILE_ADD_INTO_QUEUE_UNSUPPORTED = (fileName: string) => `Unsupported file for \`${fileName}\`.`;
export const FILE_ADDED_INTO_QUEUE = (fileId: string) => `File (${fileId}) added into queue.`;
export const FILE_ALREADY_IN_QUEUE = (fileId: string) => `File (${fileId}) already in the queue.`;
export const GET_CHAT_ERROR = (chatId: number, reason: any) => `Get Chat Error ${chatId}: ${reason}.`;
export const GROUP_PHOTO_CAPTION = "#群组图片";
export const GROUP_PHOTO_PIXIV_CAPTION = (illust: PhotoData.PixivIllustStructure) =>
    `${illust.title}(${illust.userName})
${illust.referralUrl} ${GROUP_PHOTO_CAPTION}

${illust.tags.join(" ")}
${illust.caption}`;
export const IMAGE_FROM_URL_DIMENSION = (mime: string, w: number, h: number) =>
    `Got Image file in type of ${mime} as resolution in dimension (${w}×${h}).`;
export const INVALID_VALUE = "无效数值";
export const NEED_TELEGRAM_BOT_TOKEN = "Need a valid Telegram Bot Token.";
export const NOT_SUPPORT_FOR_HENTAI = (url: string) => `Not support for hentai: ${url}`;
export const NOT_SUPPORT_FOR_HENTAI_MSG = (url: string) => `目前该网址不提供绅士支持: ${url}`;
export const NOW_INTERVAL = (interval: string) => `目前设定值为${interval}小时`;
export const PAUSE_RESUME_MESSAGE = (chat: TelegramBot.Chat, chatData: PhotoData.PhotoDataStrcture) =>
    `暂停更换群组头像状态已设为: ${chatData.paused ? "暂停中" : "正常中"}`;
export const PAUSE_RESUME_LOG_MESSAGE = (chat: TelegramBot.Chat, chatData: PhotoData.PhotoDataStrcture) =>
    `Group/Peer ${chat.title || chat.username}(${chat.id}) set paused state to => ${chatData.paused}.`;
export const PHOTO_CAPTION_MAX_LENGTH = 100;
export const PHOTO_RETRY_MAX = process.env.PHOTO_RETRY_MAX !== undefined ? Number(process.env.PHOTO_RETRY_MAX) : 3;
export const PHOTO_RETRY_DELETE_MESSAGE = (fileId: string) => `文件/图片 \`${fileId}\` 重试失败次数已超过 ${PHOTO_RETRY_MAX} 次，已从序列移出。`;
export const PHOTO_RETRY_DELETE_FROM_QUEUE = (charId: number, fileId: string) =>
    `Retry exceed the max retry of ${PHOTO_RETRY_MAX} times, delete \`${fileId}\` from \`${charId}\` queue`;
export const PHOTO_RETRY_REQUEUE = (charId: number, fileId: string) => `Retry the photo of \`${fileId}\` by re-add into \`${charId}\` queue`;
export const PIXIV_ILLUST_IID_URL = (iid: number) => `https://www.pixiv.net/i/${iid}`;
export const PIXIV_ILLUST_DETAIL = (illust: PhotoData.PixivIllustStructure) =>
    `Got Illust \`${illust.title} : ${illust.caption} - ${illust.userName}\` (${illust.tags.join(", ")}) ` +
    `with URL \`${illust.originalUrl}\` and square image URL \`${illust.squareMediumUrl}\``;
export const PIXIV_URL_REVERSED_PROXY = (oUrl: string, pUrl: string) => `Convert Pixiv URL \`${oUrl}\` => \`${pUrl}\``;
export const QUEUE_REQUEST_TEXT = (type: string, name: string) => `Receive ${type} Queue Request from ${name}.`;
export const QUEUE_TEXT = (type: string, chat: TelegramBot.Chat) => `Receive ${type} Queue from Group/Peer ${chat.title || chat.username}(${chat.id}).`;
export const QUEUE_WAS_BANNED = (chatId: number, fileId: string) => `The file of ${fileId} was banned in ${chatId}`;
export const REGEXP_MATCH_HENTAI_DOMAIN = /e[x\-]?hentai.org/i;
export const REGEXP_MATCH_PIXIV_DOMAIN = /\.pixiv\./i;
export const REGEXP_MATCH_PIXIV_ILLUST_ID = /illust_id=(\d+)|www.pixiv.net\/i\/(\d+)/i;
export const REGEXP_MATCH_PIXIV_IMAGE_DOMAIN = /^(https:\/\/)i.pximg.net(\/.+)$/i;
export const REGEXP_MATCH_TAG_COMMAND = /(#|＃)(群組圖|群组图)片/ig;
export const SET_INTERVAL = (interval: string) => `已设定自动更改时间为${interval}小时`;
export const UNBANNED_TEXT = (charId: number, fileId: string) => `Receive UnBan Queue for ${charId} to ${fileId}.`;
export const UNSUPPORTED_FILE_EXTENSIONS = (fileName: string) => `不支持格式 \`${fileName}\`，因此无法设定为群头像`;
export const UPDATE_PHOTO_ERROR = (chatId: number, reason: any) => `Update photo rejected on ${chatId}: ${reason}.`;
export const UPDATE_PHOTO_IGNORE = (chat: TelegramBot.Chat) =>
    `Group/Peer ${chat.title || chat.username}(${chat.id}) ignore to update photo due to photo link was empty.`;
export const UPDATED_PHOTO = (chat: TelegramBot.Chat, fileLink: string) =>
    `Group/Peer ${chat.title || chat.username}(${chat.id}) updated photo to \`${fileLink}\`.`;
export const UPLOADING_PHOTO = (chatId: string | number, image: Buffer, url: string) =>
    `Uploading the Photo from \`${url}\` (size: ${toMB(image.byteLength)}MB) to Chat: ${chatId}.`;
export const URL_CONTENT_TYPE_NOT_ACCEPTED = (url: string, mime: string) =>
    `The request of \`${url}\` is not accept for the MIME type which is \`${mime}\`, is only allowed image or html`;
export const URL_HTML_IGNORE = (url: string) => `Request of \`${url}\` ignore to check size.`;
export const URL_PREPARE_TO_DOWNLOAD = (msg: TelegramBot.Message, url: string) =>
    `Prepare to download \`${url}\` for ${msg.chat.title}(${msg.chat.id}).`;
export const URL_FOUND_OG_IMAGE_URL = (msg: TelegramBot.Message, url: string, ogUrl: string) =>
    `Found \`og:img\` to download \`${url}\` => \`${ogUrl}\` for ${msg.chat.title}(${msg.chat.id}).`;
export const URL_NOT_FOUND_OG_IMAGE_URL = (msg: TelegramBot.Message, url: string) =>
    `\`og:img\` not found to download \`${url}\` for ${msg.chat.title}(${msg.chat.id}), fallback to continue.`;
export const URL_REQUESTED_IS_NOT_A_IMAGE = (url: string) => `输入的网址 \`${url}\` 不是可识别的图片，无法安排自动换图`;
export const URL_REQUESTED_IS_NOT_OK = (url: string) => `输入的网址 \`${url}\` 请求失败，请重试`;
export const URL_SIZE_CHECK = (url: string) => `Checking file size for \`${url}\`.`;
export const URL_SIZE_RESULT = (url: string, size: number) =>
    `The file size for \`${url}\` is passed for ${toMB(size)}MB.`;
export const URL_SIZE_OUT_OF_BOUND = (url: string, size: number, limitation: number) =>
    `The request of \`${url}\` is ${toMB(size)}MB, ` +
    `that is exceed the limitation of ${toMB(limitation)}MB.`;
export const WAITING_PHOTOS = (chatData: PhotoData.PhotoDataStrcture, nextTime: string) =>
    `等待的图片数：${chatData.queue.length}
封禁的图片数量：${chatData.banList.length}
历史记录数量：${chatData.history.length}
下次换图时间：${nextTime}${chatData.paused ? " (暂停中)" : ""}`;
