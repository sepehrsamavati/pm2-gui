const keys = [
    "_appTitle",
    "connectToPm2",
    "noContentToShow",
    "noProcessInList",
    "type",
    "port",
    "protocol",
    "hostname",
    "connect",
    "disconnect",
    "start",
    "restart",
    "stop",
    "flush",
    "reset",
    "flushAll",
    "resetAll",
    "refresh",
    "autoRefresh",
    "cpuPercentage",
    "memoryMegabyteUsage",
    "succeeded",
    "connectFailed",
    "unknown",
    "unknownError",
    "token",
    "invalidToken",
    "history",
    "clear",
    "log",
    "readonlyMode",
    "fieldIsRequired",
    "minValidValue",
    "maxValidValue",
    "minValidLength",
    "maxValidLength",
    "validLength",
    "login",
    "username",
    "password",
    "return",

    "createUser",
    "edit",
    "editUser",
    "repeatPassword",
    "accountType",
    "adminAccountTypeDescription",
    "managerAccountTypeDescription",
    "memberAccountTypeDescription",
    "processPermissions",
    "addProcess",
    "processName",
    "permissions",
    "view",
    "delete",
    "viewOutputLog",
    "viewErrorLog",
    "activate",
    "deactivate",

    "submit",
    "save"
] as const;

export type UITextKey = typeof keys[number];

export type UITextKeyOptional = UITextKey | (string & {});

export type UITextType = {
    [Key in UITextKey]: string;
};
