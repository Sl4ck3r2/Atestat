/* tslint:disable */
/* eslint-disable */
/**
 * Login API
 * Login system APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface DataDto
 */
export interface DataDto {
    /**
     * 
     * @type {number}
     * @memberof DataDto
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof DataDto
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof DataDto
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof DataDto
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof DataDto
     */
    'created_at': string;
    /**
     * 
     * @type {RoleDto}
     * @memberof DataDto
     */
    'userRole'?: RoleDto;
}
/**
 * 
 * @export
 * @interface LoginRequest
 */
export interface LoginRequest {
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof LoginRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RegisterRequest
 */
export interface RegisterRequest {
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRequest
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RoleDto
 */
export interface RoleDto {
    /**
     * 
     * @type {number}
     * @memberof RoleDto
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof RoleDto
     */
    'name': RoleDtoNameEnum;
}

export const RoleDtoNameEnum = {
    Admin: 'ADMIN',
    Superadmin: 'SUPERADMIN',
    User: 'USER'
} as const;

export type RoleDtoNameEnum = typeof RoleDtoNameEnum[keyof typeof RoleDtoNameEnum];

/**
 * 
 * @export
 * @interface TableDataDto
 */
export interface TableDataDto {
    /**
     * 
     * @type {number}
     * @memberof TableDataDto
     */
    'page': number;
    /**
     * 
     * @type {Array<DataDto>}
     * @memberof TableDataDto
     */
    'data'?: Array<DataDto>;
}
/**
 * 
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * The unique id of each user
     * @type {number}
     * @memberof UserDto
     */
    'id'?: number;
    /**
     * The first name of each user
     * @type {string}
     * @memberof UserDto
     */
    'firstName': string;
    /**
     * The last name of each user
     * @type {string}
     * @memberof UserDto
     */
    'lastName': string;
    /**
     * The email of each user
     * @type {string}
     * @memberof UserDto
     */
    'email': string;
    /**
     * The city of each user
     * @type {string}
     * @memberof UserDto
     */
    'city': string;
    /**
     * The gender for each user
     * @type {string}
     * @memberof UserDto
     */
    'state': string;
    /**
     * The country for each user
     * @type {string}
     * @memberof UserDto
     */
    'country': string;
    /**
     * The profile picture URL
     * @type {string}
     * @memberof UserDto
     */
    'profilePictureUrl': string;
    /**
     * 
     * @type {RoleDto}
     * @memberof UserDto
     */
    'userRole'?: RoleDto;
}

/**
 * AuthControllerApi - axios parameter creator
 * @export
 */
export const AuthControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Login to your account
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost: async (loginRequest: LoginRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'loginRequest' is not null or undefined
            assertParamExists('loginPost', 'loginRequest', loginRequest)
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(loginRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new account
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerPost: async (registerRequest: RegisterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'registerRequest' is not null or undefined
            assertParamExists('registerPost', 'registerRequest', registerRequest)
            const localVarPath = `/register`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(registerRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthControllerApi - functional programming interface
 * @export
 */
export const AuthControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Login to your account
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginPost(loginRequest: LoginRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginPost(loginRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Create a new account
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async registerPost(registerRequest: RegisterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RegisterRequest>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.registerPost(registerRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthControllerApi - factory interface
 * @export
 */
export const AuthControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary Login to your account
         * @param {LoginRequest} loginRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost(loginRequest: LoginRequest, options?: any): AxiosPromise<string> {
            return localVarFp.loginPost(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new account
         * @param {RegisterRequest} registerRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerPost(registerRequest: RegisterRequest, options?: any): AxiosPromise<RegisterRequest> {
            return localVarFp.registerPost(registerRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for loginPost operation in AuthControllerApi.
 * @export
 * @interface AuthControllerApiLoginPostRequest
 */
export interface AuthControllerApiLoginPostRequest {
    /**
     * 
     * @type {LoginRequest}
     * @memberof AuthControllerApiLoginPost
     */
    readonly loginRequest: LoginRequest
}

/**
 * Request parameters for registerPost operation in AuthControllerApi.
 * @export
 * @interface AuthControllerApiRegisterPostRequest
 */
export interface AuthControllerApiRegisterPostRequest {
    /**
     * 
     * @type {RegisterRequest}
     * @memberof AuthControllerApiRegisterPost
     */
    readonly registerRequest: RegisterRequest
}

/**
 * AuthControllerApi - object-oriented interface
 * @export
 * @class AuthControllerApi
 * @extends {BaseAPI}
 */
export class AuthControllerApi extends BaseAPI {
    /**
     * 
     * @summary Login to your account
     * @param {AuthControllerApiLoginPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public loginPost(requestParameters: AuthControllerApiLoginPostRequest, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).loginPost(requestParameters.loginRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a new account
     * @param {AuthControllerApiRegisterPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public registerPost(requestParameters: AuthControllerApiRegisterPostRequest, options?: AxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).registerPost(requestParameters.registerRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserControllerApi - axios parameter creator
 * @export
 */
export const UserControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Update role user
         * @param {string} token 
         * @param {number} [id] 
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roleUpdatePut: async (token: string, id?: number, email?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('roleUpdatePut', 'token', token)
            const localVarPath = `/role/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (token !== undefined && token !== null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Return the curent user data.
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCurrentGet: async (token: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('userCurrentGet', 'token', token)
            const localVarPath = `/user/current`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined && token !== null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update user data
         * @param {string} token 
         * @param {UserDto} userDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCurrentPut: async (token: string, userDto: UserDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('userCurrentPut', 'token', token)
            // verify required parameter 'userDto' is not null or undefined
            assertParamExists('userCurrentPut', 'userDto', userDto)
            const localVarPath = `/user/current`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (token !== undefined && token !== null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(userDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Return the data from the pointed email
         * @param {string} token 
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userGet: async (token: string, email?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('userGet', 'token', token)
            const localVarPath = `/user`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (token !== undefined && token !== null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Return the list of all users
         * @param {string} token 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet: async (token: string, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'token' is not null or undefined
            assertParamExists('usersGet', 'token', token)
            const localVarPath = `/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (token !== undefined && token !== null) {
                localVarHeaderParameter['token'] = String(token);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserControllerApi - functional programming interface
 * @export
 */
export const UserControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Update role user
         * @param {string} token 
         * @param {number} [id] 
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roleUpdatePut(token: string, id?: number, email?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roleUpdatePut(token, id, email, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Return the curent user data.
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCurrentGet(token: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userCurrentGet(token, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update user data
         * @param {string} token 
         * @param {UserDto} userDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userCurrentPut(token: string, userDto: UserDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userCurrentPut(token, userDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Return the data from the pointed email
         * @param {string} token 
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async userGet(token: string, email?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.userGet(token, email, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Return the list of all users
         * @param {string} token 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersGet(token: string, page?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TableDataDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersGet(token, page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserControllerApi - factory interface
 * @export
 */
export const UserControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserControllerApiFp(configuration)
    return {
        /**
         * 
         * @summary Update role user
         * @param {string} token 
         * @param {number} [id] 
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roleUpdatePut(token: string, id?: number, email?: string, options?: any): AxiosPromise<UserDto> {
            return localVarFp.roleUpdatePut(token, id, email, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Return the curent user data.
         * @param {string} token 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCurrentGet(token: string, options?: any): AxiosPromise<UserDto> {
            return localVarFp.userCurrentGet(token, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update user data
         * @param {string} token 
         * @param {UserDto} userDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userCurrentPut(token: string, userDto: UserDto, options?: any): AxiosPromise<void> {
            return localVarFp.userCurrentPut(token, userDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Return the data from the pointed email
         * @param {string} token 
         * @param {string} [email] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        userGet(token: string, email?: string, options?: any): AxiosPromise<UserDto> {
            return localVarFp.userGet(token, email, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Return the list of all users
         * @param {string} token 
         * @param {number} [page] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersGet(token: string, page?: number, options?: any): AxiosPromise<TableDataDto> {
            return localVarFp.usersGet(token, page, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for roleUpdatePut operation in UserControllerApi.
 * @export
 * @interface UserControllerApiRoleUpdatePutRequest
 */
export interface UserControllerApiRoleUpdatePutRequest {
    /**
     * 
     * @type {string}
     * @memberof UserControllerApiRoleUpdatePut
     */
    readonly token: string

    /**
     * 
     * @type {number}
     * @memberof UserControllerApiRoleUpdatePut
     */
    readonly id?: number

    /**
     * 
     * @type {string}
     * @memberof UserControllerApiRoleUpdatePut
     */
    readonly email?: string
}

/**
 * Request parameters for userCurrentGet operation in UserControllerApi.
 * @export
 * @interface UserControllerApiUserCurrentGetRequest
 */
export interface UserControllerApiUserCurrentGetRequest {
    /**
     * 
     * @type {string}
     * @memberof UserControllerApiUserCurrentGet
     */
    readonly token: string
}

/**
 * Request parameters for userCurrentPut operation in UserControllerApi.
 * @export
 * @interface UserControllerApiUserCurrentPutRequest
 */
export interface UserControllerApiUserCurrentPutRequest {
    /**
     * 
     * @type {string}
     * @memberof UserControllerApiUserCurrentPut
     */
    readonly token: string

    /**
     * 
     * @type {UserDto}
     * @memberof UserControllerApiUserCurrentPut
     */
    readonly userDto: UserDto
}

/**
 * Request parameters for userGet operation in UserControllerApi.
 * @export
 * @interface UserControllerApiUserGetRequest
 */
export interface UserControllerApiUserGetRequest {
    /**
     * 
     * @type {string}
     * @memberof UserControllerApiUserGet
     */
    readonly token: string

    /**
     * 
     * @type {string}
     * @memberof UserControllerApiUserGet
     */
    readonly email?: string
}

/**
 * Request parameters for usersGet operation in UserControllerApi.
 * @export
 * @interface UserControllerApiUsersGetRequest
 */
export interface UserControllerApiUsersGetRequest {
    /**
     * 
     * @type {string}
     * @memberof UserControllerApiUsersGet
     */
    readonly token: string

    /**
     * 
     * @type {number}
     * @memberof UserControllerApiUsersGet
     */
    readonly page?: number
}

/**
 * UserControllerApi - object-oriented interface
 * @export
 * @class UserControllerApi
 * @extends {BaseAPI}
 */
export class UserControllerApi extends BaseAPI {
    /**
     * 
     * @summary Update role user
     * @param {UserControllerApiRoleUpdatePutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public roleUpdatePut(requestParameters: UserControllerApiRoleUpdatePutRequest, options?: AxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).roleUpdatePut(requestParameters.token, requestParameters.id, requestParameters.email, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Return the curent user data.
     * @param {UserControllerApiUserCurrentGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public userCurrentGet(requestParameters: UserControllerApiUserCurrentGetRequest, options?: AxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).userCurrentGet(requestParameters.token, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update user data
     * @param {UserControllerApiUserCurrentPutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public userCurrentPut(requestParameters: UserControllerApiUserCurrentPutRequest, options?: AxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).userCurrentPut(requestParameters.token, requestParameters.userDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Return the data from the pointed email
     * @param {UserControllerApiUserGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public userGet(requestParameters: UserControllerApiUserGetRequest, options?: AxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).userGet(requestParameters.token, requestParameters.email, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Return the list of all users
     * @param {UserControllerApiUsersGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserControllerApi
     */
    public usersGet(requestParameters: UserControllerApiUsersGetRequest, options?: AxiosRequestConfig) {
        return UserControllerApiFp(this.configuration).usersGet(requestParameters.token, requestParameters.page, options).then((request) => request(this.axios, this.basePath));
    }
}


