
export interface AuthorizationDefinition {
  superAdmin: AuthorizationDefinitionRole;
  admin: AuthorizationDefinitionRole;
  basic: AuthorizationDefinitionRole;
  demo: AuthorizationDefinitionRole;
  siteAdmin: AuthorizationDefinitionRole;
  siteOwner: AuthorizationDefinitionRole;
}
export interface AuthorizationDefinitionRole {
  grants: AuthorizationDefinitionGrant[];
  $extend?: Record<string, unknown>;
}

export interface AuthorizationDefinitionGrant {
  resource: Entity;
  action: Action | Action[];
  args?: Record<string, unknown>;
  condition?: AuthorizationDefinitionCondition;
  attributes?: string[];
}

export interface AuthorizationDefinitionCondition {
  Fn: string;
  args: AuthorizationDefinitionConditionArgs|AuthorizationDefinitionConditionArgs[]|AuthorizationDefinitionCondition[]|Record<string, unknown>;
}

export interface AuthorizationDefinitionConditionArgs {
  filters?: string[];
  asserts?: string[];
  metadata?: Record<string, unknown>;
}

export interface AuthorizationFilter {
  filters: Record<string, unknown>;
  project: string[];
}


export enum Entity {
  SITE = 'Site',
  SITES = 'Sites',
  SITE_AREA = 'SiteArea',
  SITE_AREAS = 'SiteAreas',
  COMPANY = 'Company',
  COMPANIES = 'Companies',
  CHARGING_STATION = 'ChargingStation',
  CHARGING_STATIONS = 'ChargingStations',
  TENANT = 'Tenant',
  TENANTS = 'Tenants',
  TRANSACTION = 'Transaction',
  TRANSACTIONS = 'Transactions',
  TRANSACTION_METER_VALUES = 'MeterValues',
  TRANSACTION_STOP = 'Stop',
  REPORT = 'Report',
  USER = 'User',
  USERS = 'Users',
  USERS_SITES = 'UsersSites',
  LOGGINGS = 'Loggings',
  LOGGING = 'Logging',
  PRICING = 'Pricing',
  BILLING = 'Billing',
  SETTING = 'Setting',
  SETTINGS = 'Settings',
  TOKENS = 'Tokens',
  TOKEN = 'Token',
  ASYNC_TASK = 'AsyncTask',
  ASYNC_TASKS = 'AsyncTasks',
  OCPI_ENDPOINT = 'OcpiEndpoint',
  OCPI_ENDPOINTS = 'OcpiEndpoints',
  OICP_ENDPOINT = 'OicpEndpoint',
  OICP_ENDPOINTS = 'OicpEndpoints',
  CONNECTION = 'Connection',
  CONNECTIONS = 'Connections',
  ASSET = 'Asset',
  ASSETS = 'Assets',
  CAR_CATALOG = 'CarCatalog',
  CAR_CATALOGS = 'CarCatalogs',
  CAR = 'Car',
  CARS = 'Cars',
  USERS_CARS = 'UsersCars',
  INVOICE = 'Invoice',
  INVOICES = 'Invoices',
  TAXES = 'Taxes',
  REGISTRATION_TOKEN = 'RegistrationToken',
  REGISTRATION_TOKENS = 'RegistrationTokens',
  CHARGING_PROFILE = 'ChargingProfile',
  CHARGING_PROFILES = 'ChargingProfiles',
  NOTIFICATION = 'Notification',
  TAGS = 'Tags',
  TAG = 'Tag',
  PAYMENT_METHOD = 'PaymentMethod',
  PAYMENT_METHODS = 'PaymentMethods',
}

export enum Action {
  READ = 'Read',
  CREATE = 'Create',
  UPDATE = 'Update',
  REPLACE = 'Replace',
  DELETE = 'Delete',
  LOGOUT = 'Logout',
  LOGIN = 'Login',
  LIST = 'List',
  IN_ERROR = 'InError',
  RESET = 'Reset',
  ASSIGN = 'Assign',
  UNASSIGN = 'Unassign',
  CLEAR_CACHE = 'ClearCache',
  SYNCHRONIZE = 'Synchronize',
  GET_CONFIGURATION = 'GetConfiguration',
  CHANGE_CONFIGURATION = 'ChangeConfiguration',
  SYNCHRONIZE_CAR_CATALOGS = 'SynchronizeCarCatalogs',
  REMOTE_START_TRANSACTION = 'RemoteStartTransaction',
  REMOTE_STOP_TRANSACTION = 'RemoteStopTransaction',
  START_TRANSACTION = 'StartTransaction',
  STOP_TRANSACTION = 'StopTransaction',
  UNLOCK_CONNECTOR = 'UnlockConnector',
  AUTHORIZE = 'Authorize',
  SET_CHARGING_PROFILE = 'SetChargingProfile',
  GET_COMPOSITE_SCHEDULE = 'GetCompositeSchedule',
  CLEAR_CHARGING_PROFILE = 'ClearChargingProfile',
  GET_DIAGNOSTICS = 'GetDiagnostics',
  UPDATE_FIRMWARE = 'UpdateFirmware',
  EXPORT = 'Export',
  CHANGE_AVAILABILITY = 'ChangeAvailability',
  REFUND_TRANSACTION = 'RefundTransaction',
  SYNCHRONIZE_BILLING_USERS = 'SynchronizeBillingUsers',
  SYNCHRONIZE_BILLING_USER = 'SynchronizeBillingUser',
  BILLING_SETUP_PAYMENT_METHOD = 'BillingSetupPaymentMethod',
  BILLING_PAYMENT_METHODS = 'BillingPaymentMethods',
  BILLING_DELETE_PAYMENT_METHOD = 'BillingDeletePaymentMethod',
  BILLING_CHARGE_INVOICE = 'BillingChargeInvoice',
  CHECK_CONNECTION = 'CheckConnection',
  RETRIEVE_CONSUMPTION = 'RetrieveConsumption',
  PING = 'Ping',
  GENERATE_LOCAL_TOKEN = 'GenerateLocalToken',
  REGISTER = 'Register',
  TRIGGER_JOB = 'TriggerJob',
  DOWNLOAD = 'Download',
  IMPORT = 'Import',
  ASSIGN_USERS_TO_SITE = 'AssignUsersToSite',
  UNASSIGN_USERS_TO_SITE = 'UnassignUsersToSite',
  ASSIGN_ASSETS_TO_SITE_AREA = 'AssignAssetsToSiteArea',
  UNASSIGN_ASSETS_TO_SITE_AREA = 'UnassignAssetsToSiteArea',
  ASSIGN_CHARGING_STATIONS_TO_SITE_AREA = 'AssignChargingStationsToSiteArea',
  UNASSIGN_CHARGING_STATIONS_TO_SITE_AREA = 'UnassignChargingStationsToSiteArea',
  EXPORT_OCPP_PARAMS = 'ExportOCPPParams',
  GENERATE_QR = 'GenerateQrCode',
}

export interface AuthorizationContext {
  tagIDs?: string[];
  tagID?: string;
  owner?: string;
  site?: string;
  sites?: string[];
  sitesAdmin?: string[];
  user?: string;
  UserID?: string;
  sitesOwner?: string[];
  company?: string;
  companies?: string[];
  asset?: string;
  assets?: string[];
}

export interface AuthorizationActions {
  canRead?: boolean;
  canCreate?: boolean;
  canUpdate?: boolean;
  canDelete?: boolean;
  projectFields?: string[];
}

export interface TagAuthorizationActions extends AuthorizationActions {
  canUnassign?: boolean;
  canUpdateByVisualID?: boolean;
}

export interface SiteAuthorizationActions extends AuthorizationActions {
  canAssignUsers?: boolean;
  canUnassignUsers?: boolean;
  canExportOCPPParams?: boolean;
  canGenerateQrCode?: boolean;
}

export interface SiteAreaAuthorizationActions extends AuthorizationActions {
  canAssignChargingStations?: boolean;
  canUnassignChargingStations?: boolean;
  canAssignAssets?: boolean;
  canUnassignAssets?: boolean;
  canExportOCPPParams?: boolean;
  canGenerateQrCode?: boolean;
}

export enum DialogMode {
  EDIT = 'E',
  CREATE = 'C',
  VIEW = 'V',
}

export interface DialogData {
  id: string | number;
  projectFields?: string[];
}

export interface DialogParams<T extends DialogData> {
  dialogData?: T;
  dialogMode?: DialogMode;
}
