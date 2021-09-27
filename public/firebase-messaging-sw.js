/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@firebase/app/dist/index.esm2017.js":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/app/dist/index.esm2017.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* binding */ DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* binding */ _addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* binding */ _addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* binding */ _apps),
/* harmony export */   "_clearComponents": () => (/* binding */ _clearComponents),
/* harmony export */   "_components": () => (/* binding */ _components),
/* harmony export */   "_getProvider": () => (/* binding */ _getProvider),
/* harmony export */   "_registerComponent": () => (/* binding */ _registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* binding */ _removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* binding */ deleteApp),
/* harmony export */   "getApp": () => (/* binding */ getApp),
/* harmony export */   "getApps": () => (/* binding */ getApps),
/* harmony export */   "initializeApp": () => (/* binding */ initializeApp),
/* harmony export */   "onLog": () => (/* binding */ onLog),
/* harmony export */   "registerVersion": () => (/* binding */ registerVersion),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/index.esm.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");





/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

const name$o = "@firebase/app";
const version$1 = "0.7.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');

const name$n = "@firebase/app-compat";

const name$m = "@firebase/analytics-compat";

const name$l = "@firebase/analytics";

const name$k = "@firebase/app-check-compat";

const name$j = "@firebase/app-check";

const name$i = "@firebase/auth";

const name$h = "@firebase/auth-compat";

const name$g = "@firebase/database";

const name$f = "@firebase/database-compat";

const name$e = "@firebase/functions";

const name$d = "@firebase/functions-compat";

const name$c = "@firebase/installations";

const name$b = "@firebase/installations-compat";

const name$a = "@firebase/messaging";

const name$9 = "@firebase/messaging-compat";

const name$8 = "@firebase/performance";

const name$7 = "@firebase/performance-compat";

const name$6 = "@firebase/remote-config";

const name$5 = "@firebase/remote-config-compat";

const name$4 = "@firebase/storage";

const name$3 = "@firebase/storage-compat";

const name$2 = "@firebase/firestore";

const name$1 = "@firebase/firestore-compat";

const name = "firebase";
const version = "9.0.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    ["bad-app-name" /* BAD_APP_NAME */]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) &&
            (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    const name = app.name;
    if (_apps.has(name)) {
        _apps.delete(name);
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
    }
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents();


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/index.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/index.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentContainer": () => (/* binding */ ComponentContainer),
/* harmony export */   "Provider": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");



/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
var Component = /** @class */ (function () {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    function Component(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    Component.prototype.setInstantiationMode = function (mode) {
        this.instantiationMode = mode;
        return this;
    };
    Component.prototype.setMultipleInstances = function (multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    };
    Component.prototype.setServiceProps = function (props) {
        this.serviceProps = props;
        return this;
    };
    Component.prototype.setInstanceCreatedCallback = function (callback) {
        this.onInstanceCreated = callback;
        return this;
    };
    return Component;
}());

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
var Provider = /** @class */ (function () {
    function Provider(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    Provider.prototype.get = function (identifier) {
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            var deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    };
    Provider.prototype.getImmediate = function (options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        var normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        var optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error("Service " + this.name + " is not available");
            }
        }
    };
    Provider.prototype.getComponent = function () {
        return this.component;
    };
    Provider.prototype.setComponent = function (component) {
        var e_1, _a;
        if (component.name !== this.name) {
            throw Error("Mismatching Component " + component.name + " for Provider " + this.name + ".");
        }
        if (this.component) {
            throw Error("Component for " + this.name + " has already been provided");
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        try {
            // Create service instances for the pending promises and resolve them
            // NOTE: if this.multipleInstances is false, only the default instance will be created
            // and all promises with resolve with it regardless of the identifier.
            for (var _b = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.instancesDeferred.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_c.value, 2), instanceIdentifier = _d[0], instanceDeferred = _d[1];
                var normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                try {
                    // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                    var instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    instanceDeferred.resolve(instance);
                }
                catch (e) {
                    // when the instance factory throws an exception, it should not cause
                    // a fatal error. We just leave the promise unresolved.
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    Provider.prototype.clearInstance = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    };
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    Provider.prototype.delete = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function () {
            var services;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        services = Array.from(this.instances.values());
                        return [4 /*yield*/, Promise.all((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_1__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(services
                                .filter(function (service) { return 'INTERNAL' in service; }) // legacy services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service.INTERNAL.delete(); }))), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(services
                                .filter(function (service) { return '_delete' in service; }) // modularized services
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                .map(function (service) { return service._delete(); }))))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Provider.prototype.isComponentSet = function () {
        return this.component != null;
    };
    Provider.prototype.isInitialized = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instances.has(identifier);
    };
    Provider.prototype.getOptions = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        return this.instancesOptions.get(identifier) || {};
    };
    Provider.prototype.initialize = function (opts) {
        var e_2, _a;
        if (opts === void 0) { opts = {}; }
        var _b = opts.options, options = _b === void 0 ? {} : _b;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(this.name + "(" + normalizedIdentifier + ") has already been initialized");
        }
        if (!this.isComponentSet()) {
            throw Error("Component " + this.name + " has not been registered yet");
        }
        var instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options: options
        });
        try {
            // resolve any pending promise waiting for the service instance
            for (var _c = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(this.instancesDeferred.entries()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var _e = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__read)(_d.value, 2), instanceIdentifier = _e[0], instanceDeferred = _e[1];
                var normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
                if (normalizedIdentifier === normalizedDeferredIdentifier) {
                    instanceDeferred.resolve(instance);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return instance;
    };
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    Provider.prototype.onInit = function (callback, identifier) {
        var _a;
        var normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        var existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        var existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return function () {
            existingCallbacks.delete(callback);
        };
    };
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    Provider.prototype.invokeOnInitCallbacks = function (instance, identifier) {
        var e_3, _a;
        var callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        try {
            for (var callbacks_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__values)(callbacks), callbacks_1_1 = callbacks_1.next(); !callbacks_1_1.done; callbacks_1_1 = callbacks_1.next()) {
                var callback = callbacks_1_1.value;
                try {
                    callback(instance, identifier);
                }
                catch (_b) {
                    // ignore errors in the onInit callback
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (callbacks_1_1 && !callbacks_1_1.done && (_a = callbacks_1.return)) _a.call(callbacks_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    Provider.prototype.getOrInitializeService = function (_a) {
        var instanceIdentifier = _a.instanceIdentifier, _b = _a.options, options = _b === void 0 ? {} : _b;
        var instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options: options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_c) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    };
    Provider.prototype.normalizeInstanceIdentifier = function (identifier) {
        if (identifier === void 0) { identifier = DEFAULT_ENTRY_NAME; }
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    };
    Provider.prototype.shouldAutoInitialize = function () {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    };
    return Provider;
}());
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
var ComponentContainer = /** @class */ (function () {
    function ComponentContainer(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    ComponentContainer.prototype.addComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error("Component " + component.name + " has already been registered with " + this.name);
        }
        provider.setComponent(component);
    };
    ComponentContainer.prototype.addOrOverwriteComponent = function (component) {
        var provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    };
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    ComponentContainer.prototype.getProvider = function (name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        var provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    };
    ComponentContainer.prototype.getProviders = function () {
        return Array.from(this.providers.values());
    };
    return ComponentContainer;
}());


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/installations/dist/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteInstallations": () => (/* binding */ deleteInstallations),
/* harmony export */   "getId": () => (/* binding */ getId),
/* harmony export */   "getInstallations": () => (/* binding */ getInstallations),
/* harmony export */   "getToken": () => (/* binding */ getToken),
/* harmony export */   "onIdChange": () => (/* binding */ onIdChange)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/idb.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_3__);





const name = "@firebase/installations";
const version = "0.5.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_TIMEOUT_MS = 10000;
const PACKAGE_VERSION = `w:${version}`;
const INTERNAL_AUTH_VERSION = 'FIS_v2';
const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
const SERVICE = 'installations';
const SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_DESCRIPTION_MAP = {
    ["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
    ["not-registered" /* NOT_REGISTERED */]: 'Firebase Installation is not registered.',
    ["installation-not-found" /* INSTALLATION_NOT_FOUND */]: 'Firebase Installation not found.',
    ["request-failed" /* REQUEST_FAILED */]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    ["app-offline" /* APP_OFFLINE */]: 'Could not process request. Application offline.',
    ["delete-pending-registration" /* DELETE_PENDING_REGISTRATION */]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError &&
        error.code.includes("request-failed" /* REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint({ projectId }) {
    return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed" /* REQUEST_FAILED */, {
        requestName,
        serverCode: errorData.code,
        serverMessage: errorData.message,
        serverStatus: errorData.status
    });
}
function getHeaders({ apiKey }) {
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, { refreshToken }) {
    const headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) {
        // Internal Server Error. Retry request.
        return fn();
    }
    return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function createInstallationRequest(appConfig, { fid }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    const body = {
        fid,
        authVersion: INTERNAL_AUTH_VERSION,
        appId: appConfig.appId,
        sdkVersion: PACKAGE_VERSION
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* COMPLETED */,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
        };
        return registeredInstallationEntry;
    }
    else {
        throw await getErrorFromResponse('Create Installation', response);
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        const fidByteArray = new Uint8Array(17);
        const crypto = self.crypto || self.msCrypto;
        crypto.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 0b01110000 + (fidByteArray[0] % 0b00010000);
        const fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
    return `${appConfig.appName}!${appConfig.appId}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    const key = getKey(appConfig);
    let callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    const key = getKey(appConfig);
    const callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    for (const callback of callbacks) {
        callback(fid);
    }
}
function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({ key, fid });
    }
    closeBroadcastChannel();
}
let broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = e => {
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME = 'firebase-installations-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-installations-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDb)(DATABASE_NAME, DATABASE_VERSION, upgradeDB => {
            // We don't use 'break' in this switch statement, the fall-through
            // behavior is what we want, because if there are multiple versions between
            // the old version and the current version, we want ALL the migrations
            // that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDB.oldVersion) {
                case 0:
                    upgradeDB.createObjectStore(OBJECT_STORE_NAME);
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await objectStore.get(key);
    await objectStore.put(value, key);
    await tx.complete;
    if (!oldValue || oldValue.fid !== value.fid) {
        fidChanged(appConfig, value.fid);
    }
    return value;
}
/** Removes record(s) from the objectStore that match the given key. */
async function remove(appConfig) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.complete;
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = await store.get(key);
    const newValue = updateFn(oldValue);
    if (newValue === undefined) {
        await store.delete(key);
    }
    else {
        await store.put(newValue, key);
    }
    await tx.complete;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
        fidChanged(appConfig, newValue.fid);
    }
    return newValue;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
async function getInstallationEntry(appConfig) {
    let registrationPromise;
    const installationEntry = await update(appConfig, oldEntry => {
        const installationEntry = updateOrCreateInstallationEntry(oldEntry);
        const entryWithPromise = triggerRegistrationIfNecessary(appConfig, installationEntry);
        registrationPromise = entryWithPromise.registrationPromise;
        return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
        // FID generation failed. Waiting for the FID from the server.
        return { installationEntry: await registrationPromise };
    }
    return {
        installationEntry,
        registrationPromise
    };
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(appConfig, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */));
            return {
                installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        const inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* IN_PROGRESS */,
            registrationTime: Date.now()
        };
        const registrationPromise = registerInstallation(appConfig, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* IN_PROGRESS */) {
        return {
            installationEntry,
            registrationPromise: waitUntilFidRegistration(appConfig)
        };
    }
    else {
        return { installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
async function registerInstallation(appConfig, installationEntry) {
    try {
        const registeredInstallationEntry = await createInstallationRequest(appConfig, installationEntry);
        return set(appConfig, registeredInstallationEntry);
    }
    catch (e) {
        if (isServerError(e) && e.customData.serverCode === 409) {
            // Server returned a "FID can not be used" error.
            // Generate a new ID next time.
            await remove(appConfig);
        }
        else {
            // Registration failed. Set FID as not registered.
            await set(appConfig, {
                fid: installationEntry.fid,
                registrationStatus: 0 /* NOT_STARTED */
            });
        }
        throw e;
    }
}
/** Call if FID registration is pending in another request. */
async function waitUntilFidRegistration(appConfig) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateInstallationRequest(appConfig);
    while (entry.registrationStatus === 1 /* IN_PROGRESS */) {
        // createInstallation request still in progress.
        await sleep(100);
        entry = await updateInstallationRequest(appConfig);
    }
    if (entry.registrationStatus === 0 /* NOT_STARTED */) {
        // The request timed out or failed in a different call. Try again.
        const { installationEntry, registrationPromise } = await getInstallationEntry(appConfig);
        if (registrationPromise) {
            return registrationPromise;
        }
        else {
            // if there is no registrationPromise, entry is registered.
            return installationEntry;
        }
    }
    return entry;
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, oldEntry => {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateAuthTokenRequest({ appConfig, platformLoggerProvider }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    // If platform logger exists, add the platform info string to the header.
    const platformLogger = platformLoggerProvider.getImmediate({
        optional: true
    });
    if (platformLogger) {
        headers.append('x-firebase-client', platformLogger.getPlatformInfoString());
    }
    const body = {
        installation: {
            sdkVersion: PACKAGE_VERSION
        }
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
        return completedAuthToken;
    }
    else {
        throw await getErrorFromResponse('Generate Auth Token', response);
    }
}
function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
async function refreshAuthToken(installations, forceRefresh = false) {
    let tokenPromise;
    const entry = await update(installations.appConfig, oldEntry => {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
        }
        const oldAuthToken = oldEntry.authToken;
        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
            // There is a valid token in the DB.
            return oldEntry;
        }
        else if (oldAuthToken.requestStatus === 1 /* IN_PROGRESS */) {
            // There already is a token request in progress.
            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
            return oldEntry;
        }
        else {
            // No token or token expired.
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
            }
            const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
            return inProgressEntry;
        }
    });
    const authToken = tokenPromise
        ? await tokenPromise
        : entry.authToken;
    return authToken;
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while (entry.authToken.requestStatus === 1 /* IN_PROGRESS */) {
        // generateAuthToken still in progress.
        await sleep(100);
        entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0 /* NOT_STARTED */) {
        // The request timed out or failed in a different call. Try again.
        return refreshAuthToken(installations, forceRefresh);
    }
    else {
        return authToken;
    }
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, oldEntry => {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* NOT_REGISTERED */);
        }
        const oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object.assign(Object.assign({}, oldEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
        const authToken = await generateAuthTokenRequest(installations, installationEntry);
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
        await set(installations.appConfig, updatedInstallationEntry);
        return authToken;
    }
    catch (e) {
        if (isServerError(e) &&
            (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
            // Server returned a "FID not found" or a "Invalid authentication" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        }
        else {
            const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: { requestStatus: 0 /* NOT_STARTED */ } });
            await set(installations.appConfig, updatedInstallationEntry);
        }
        throw e;
    }
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
        requestStatus: 1 /* IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl.appConfig);
    if (registrationPromise) {
        registrationPromise.catch(console.error);
    }
    else {
        // If the installation is already registered, update the authentication
        // token if needed.
        refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
async function getToken(installations, forceRefresh = false) {
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl.appConfig);
    // At this point we either have a Registered Installation in the DB, or we've
    // already thrown an error.
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
}
async function completeInstallationRegistration(appConfig) {
    const { registrationPromise } = await getInstallationEntry(appConfig);
    if (registrationPromise) {
        // A createInstallation request is in progress. Wait until it finishes.
        await registrationPromise;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function deleteInstallationRequest(appConfig, installationEntry) {
    const endpoint = getDeleteEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const request = {
        method: 'DELETE',
        headers
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (!response.ok) {
        throw await getErrorFromResponse('Delete Installation', response);
    }
}
function getDeleteEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
async function deleteInstallations(installations) {
    const { appConfig } = installations;
    const entry = await update(appConfig, oldEntry => {
        if (oldEntry && oldEntry.registrationStatus === 0 /* NOT_STARTED */) {
            // Delete the unregistered entry without sending a deleteInstallation request.
            return undefined;
        }
        return oldEntry;
    });
    if (entry) {
        if (entry.registrationStatus === 1 /* IN_PROGRESS */) {
            // Can't delete while trying to register.
            throw ERROR_FACTORY.create("delete-pending-registration" /* DELETE_PENDING_REGISTRATION */);
        }
        else if (entry.registrationStatus === 2 /* COMPLETED */) {
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* APP_OFFLINE */);
            }
            else {
                await deleteInstallationRequest(appConfig, entry);
                await remove(appConfig);
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */
function onIdChange(installations, callback) {
    const { appConfig } = installations;
    addCallback(appConfig, callback);
    return () => {
        removeCallback(appConfig, callback);
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */
function getInstallations(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)()) {
    const installationsImpl = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'installations').getImmediate();
    return installationsImpl;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    const configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    for (const keyName of configKeys) {
        if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
        }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
        valueName
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INSTALLATIONS_NAME = 'installations';
const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
const publicFactory = (container) => {
    const app = container.getProvider('app').getImmediate();
    // Throws if app isn't configured properly.
    const appConfig = extractAppConfig(app);
    const platformLoggerProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'platform-logger');
    const installationsImpl = {
        app,
        appConfig,
        platformLoggerProvider,
        _delete: () => Promise.resolve()
    };
    return installationsImpl;
};
const internalFactory = (container) => {
    const app = container.getProvider('app').getImmediate();
    // Internal FIS instance relies on public FIS instance.
    const installations = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
        getId: () => getId(installations),
        getToken: (forceRefresh) => getToken(installations, forceRefresh)
    };
    return installationsInternal;
};
function registerInstallations() {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* PUBLIC */));
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* PRIVATE */));
}

/**
 * Firebase Installations
 *
 * @packageDocumentation
 */
registerInstallations();
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/index.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
/* harmony export */   "setUserLogHandler": () => (/* binding */ setUserLogHandler)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
var defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
var ConsoleMethod = (_a = {},
    _a[LogLevel.DEBUG] = 'log',
    _a[LogLevel.VERBOSE] = 'log',
    _a[LogLevel.INFO] = 'info',
    _a[LogLevel.WARN] = 'warn',
    _a[LogLevel.ERROR] = 'error',
    _a);
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
var defaultLogHandler = function (instance, logType) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (logType < instance.logLevel) {
        return;
    }
    var now = new Date().toISOString();
    var method = ConsoleMethod[logType];
    if (method) {
        console[method].apply(console, __spreadArrays(["[" + now + "]  " + instance.name + ":"], args));
    }
    else {
        throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
    }
};
var Logger = /** @class */ (function () {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    function Logger(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    Object.defineProperty(Logger.prototype, "logLevel", {
        get: function () {
            return this._logLevel;
        },
        set: function (val) {
            if (!(val in LogLevel)) {
                throw new TypeError("Invalid value \"" + val + "\" assigned to `logLevel`");
            }
            this._logLevel = val;
        },
        enumerable: false,
        configurable: true
    });
    // Workaround for setter/getter having to be the same type.
    Logger.prototype.setLogLevel = function (val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    };
    Object.defineProperty(Logger.prototype, "logHandler", {
        get: function () {
            return this._logHandler;
        },
        set: function (val) {
            if (typeof val !== 'function') {
                throw new TypeError('Value assigned to `logHandler` must be a function');
            }
            this._logHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Logger.prototype, "userLogHandler", {
        get: function () {
            return this._userLogHandler;
        },
        set: function (val) {
            this._userLogHandler = val;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * The functions below are all based on the `console` interface
     */
    Logger.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.DEBUG], args));
    };
    Logger.prototype.log = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.VERBOSE], args));
    };
    Logger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.INFO], args));
    };
    Logger.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.WARN], args));
    };
    Logger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this._userLogHandler && this._userLogHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
        this._logHandler.apply(this, __spreadArrays([this, LogLevel.ERROR], args));
    };
    return Logger;
}());
function setLogLevel(level) {
    instances.forEach(function (inst) {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    var _loop_1 = function (instance) {
        var customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = function (instance, level) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                var message = args
                    .map(function (arg) {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(function (arg) { return arg; })
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message: message,
                        args: args,
                        type: instance.name
                    });
                }
            };
        }
    };
    for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
        var instance = instances_1[_i];
        _loop_1(instance);
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@firebase/messaging/dist/index.sw.esm2017.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@firebase/messaging/dist/index.sw.esm2017.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "experimentalSetDeliveryMetricsExportedToBigQueryEnabled": () => (/* binding */ setDeliveryMetricsExportedToBigQueryEnabled),
/* harmony export */   "getMessaging": () => (/* binding */ getMessagingInSw),
/* harmony export */   "isSupported": () => (/* binding */ isSwSupported),
/* harmony export */   "onBackgroundMessage": () => (/* binding */ onBackgroundMessage)
/* harmony export */ });
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/index.esm.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/idb.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm.js");
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm2017.js");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_VAPID_KEY = 'BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4';
const ENDPOINT = 'https://fcmregistrations.googleapis.com/v1';
/** Key of FCM Payload in Notification's data field. */
const FCM_MSG = 'FCM_MSG';
const CONSOLE_CAMPAIGN_ID = 'google.c.a.c_id';
// Defined as in proto/messaging_event.proto. Neglecting fields that are supported.
const SDK_PLATFORM_WEB = 3;
const EVENT_MESSAGE_DELIVERED = 1;
var MessageType$1;
(function (MessageType) {
    MessageType[MessageType["DATA_MESSAGE"] = 1] = "DATA_MESSAGE";
    MessageType[MessageType["DISPLAY_NOTIFICATION"] = 3] = "DISPLAY_NOTIFICATION";
})(MessageType$1 || (MessageType$1 = {}));

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
var MessageType;
(function (MessageType) {
    MessageType["PUSH_RECEIVED"] = "push-received";
    MessageType["NOTIFICATION_CLICKED"] = "notification-clicked";
})(MessageType || (MessageType = {}));

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function arrayToBase64(array) {
    const uint8Array = new Uint8Array(array);
    const base64String = btoa(String.fromCharCode(...uint8Array));
    return base64String.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function base64ToArray(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    const rawData = atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const OLD_DB_NAME = 'fcm_token_details_db';
/**
 * The last DB version of 'fcm_token_details_db' was 4. This is one higher, so that the upgrade
 * callback is called for all versions of the old DB.
 */
const OLD_DB_VERSION = 5;
const OLD_OBJECT_STORE_NAME = 'fcm_token_object_Store';
async function migrateOldDatabase(senderId) {
    if ('databases' in indexedDB) {
        // indexedDb.databases() is an IndexedDB v3 API and does not exist in all browsers. TODO: Remove
        // typecast when it lands in TS types.
        const databases = await indexedDB.databases();
        const dbNames = databases.map(db => db.name);
        if (!dbNames.includes(OLD_DB_NAME)) {
            // old DB didn't exist, no need to open.
            return null;
        }
    }
    let tokenDetails = null;
    const db = await (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDb)(OLD_DB_NAME, OLD_DB_VERSION, async (db) => {
        var _a;
        if (db.oldVersion < 2) {
            // Database too old, skip migration.
            return;
        }
        if (!db.objectStoreNames.contains(OLD_OBJECT_STORE_NAME)) {
            // Database did not exist. Nothing to do.
            return;
        }
        const objectStore = db.transaction.objectStore(OLD_OBJECT_STORE_NAME);
        const value = await objectStore.index('fcmSenderId').get(senderId);
        await objectStore.clear();
        if (!value) {
            // No entry in the database, nothing to migrate.
            return;
        }
        if (db.oldVersion === 2) {
            const oldDetails = value;
            if (!oldDetails.auth || !oldDetails.p256dh || !oldDetails.endpoint) {
                return;
            }
            tokenDetails = {
                token: oldDetails.fcmToken,
                createTime: (_a = oldDetails.createTime) !== null && _a !== void 0 ? _a : Date.now(),
                subscriptionOptions: {
                    auth: oldDetails.auth,
                    p256dh: oldDetails.p256dh,
                    endpoint: oldDetails.endpoint,
                    swScope: oldDetails.swScope,
                    vapidKey: typeof oldDetails.vapidKey === 'string'
                        ? oldDetails.vapidKey
                        : arrayToBase64(oldDetails.vapidKey)
                }
            };
        }
        else if (db.oldVersion === 3) {
            const oldDetails = value;
            tokenDetails = {
                token: oldDetails.fcmToken,
                createTime: oldDetails.createTime,
                subscriptionOptions: {
                    auth: arrayToBase64(oldDetails.auth),
                    p256dh: arrayToBase64(oldDetails.p256dh),
                    endpoint: oldDetails.endpoint,
                    swScope: oldDetails.swScope,
                    vapidKey: arrayToBase64(oldDetails.vapidKey)
                }
            };
        }
        else if (db.oldVersion === 4) {
            const oldDetails = value;
            tokenDetails = {
                token: oldDetails.fcmToken,
                createTime: oldDetails.createTime,
                subscriptionOptions: {
                    auth: arrayToBase64(oldDetails.auth),
                    p256dh: arrayToBase64(oldDetails.p256dh),
                    endpoint: oldDetails.endpoint,
                    swScope: oldDetails.swScope,
                    vapidKey: arrayToBase64(oldDetails.vapidKey)
                }
            };
        }
    });
    db.close();
    // Delete all old databases.
    await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDb)(OLD_DB_NAME);
    await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDb)('fcm_vapid_details_db');
    await (0,idb__WEBPACK_IMPORTED_MODULE_2__.deleteDb)('undefined');
    return checkTokenDetails(tokenDetails) ? tokenDetails : null;
}
function checkTokenDetails(tokenDetails) {
    if (!tokenDetails || !tokenDetails.subscriptionOptions) {
        return false;
    }
    const { subscriptionOptions } = tokenDetails;
    return (typeof tokenDetails.createTime === 'number' &&
        tokenDetails.createTime > 0 &&
        typeof tokenDetails.token === 'string' &&
        tokenDetails.token.length > 0 &&
        typeof subscriptionOptions.auth === 'string' &&
        subscriptionOptions.auth.length > 0 &&
        typeof subscriptionOptions.p256dh === 'string' &&
        subscriptionOptions.p256dh.length > 0 &&
        typeof subscriptionOptions.endpoint === 'string' &&
        subscriptionOptions.endpoint.length > 0 &&
        typeof subscriptionOptions.swScope === 'string' &&
        subscriptionOptions.swScope.length > 0 &&
        typeof subscriptionOptions.vapidKey === 'string' &&
        subscriptionOptions.vapidKey.length > 0);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Exported for tests.
const DATABASE_NAME = 'firebase-messaging-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-messaging-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_2__.openDb)(DATABASE_NAME, DATABASE_VERSION, upgradeDb => {
            // We don't use 'break' in this switch statement, the fall-through behavior is what we want,
            // because if there are multiple versions between the old version and the current version, we
            // want ALL the migrations that correspond to those versions to run, not only the last one.
            // eslint-disable-next-line default-case
            switch (upgradeDb.oldVersion) {
                case 0:
                    upgradeDb.createObjectStore(OBJECT_STORE_NAME);
            }
        });
    }
    return dbPromise;
}
/** Gets record(s) from the objectStore that match the given key. */
async function dbGet(firebaseDependencies) {
    const key = getKey(firebaseDependencies);
    const db = await getDbPromise();
    const tokenDetails = await db
        .transaction(OBJECT_STORE_NAME)
        .objectStore(OBJECT_STORE_NAME)
        .get(key);
    if (tokenDetails) {
        return tokenDetails;
    }
    else {
        // Check if there is a tokenDetails object in the old DB.
        const oldTokenDetails = await migrateOldDatabase(firebaseDependencies.appConfig.senderId);
        if (oldTokenDetails) {
            await dbSet(firebaseDependencies, oldTokenDetails);
            return oldTokenDetails;
        }
    }
}
/** Assigns or overwrites the record for the given key with the given value. */
async function dbSet(firebaseDependencies, tokenDetails) {
    const key = getKey(firebaseDependencies);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).put(tokenDetails, key);
    await tx.complete;
    return tokenDetails;
}
/** Removes record(s) from the objectStore that match the given key. */
async function dbRemove(firebaseDependencies) {
    const key = getKey(firebaseDependencies);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.complete;
}
function getKey({ appConfig }) {
    return appConfig.appId;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_MAP = {
    ["missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
    ["only-available-in-window" /* AVAILABLE_IN_WINDOW */]: 'This method is available in a Window context.',
    ["only-available-in-sw" /* AVAILABLE_IN_SW */]: 'This method is available in a service worker context.',
    ["permission-default" /* PERMISSION_DEFAULT */]: 'The notification permission was not granted and dismissed instead.',
    ["permission-blocked" /* PERMISSION_BLOCKED */]: 'The notification permission was not granted and blocked instead.',
    ["unsupported-browser" /* UNSUPPORTED_BROWSER */]: "This browser doesn't support the API's required to use the firebase SDK.",
    ["indexed-db-unsupported" /* INDEXED_DB_UNSUPPORTED */]: "This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)",
    ["failed-service-worker-registration" /* FAILED_DEFAULT_REGISTRATION */]: 'We are unable to register the default service worker. {$browserErrorMessage}',
    ["token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */]: 'A problem occurred while subscribing the user to FCM: {$errorInfo}',
    ["token-subscribe-no-token" /* TOKEN_SUBSCRIBE_NO_TOKEN */]: 'FCM returned no token when subscribing the user to push.',
    ["token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */]: 'A problem occurred while unsubscribing the ' +
        'user from FCM: {$errorInfo}',
    ["token-update-failed" /* TOKEN_UPDATE_FAILED */]: 'A problem occurred while updating the user from FCM: {$errorInfo}',
    ["token-update-no-token" /* TOKEN_UPDATE_NO_TOKEN */]: 'FCM returned no token when updating the user to push.',
    ["use-sw-after-get-token" /* USE_SW_AFTER_GET_TOKEN */]: 'The useServiceWorker() method may only be called once and must be ' +
        'called before calling getToken() to ensure your service worker is used.',
    ["invalid-sw-registration" /* INVALID_SW_REGISTRATION */]: 'The input to useServiceWorker() must be a ServiceWorkerRegistration.',
    ["invalid-bg-handler" /* INVALID_BG_HANDLER */]: 'The input to setBackgroundMessageHandler() must be a function.',
    ["invalid-vapid-key" /* INVALID_VAPID_KEY */]: 'The public VAPID key must be a string.',
    ["use-vapid-key-after-get-token" /* USE_VAPID_KEY_AFTER_GET_TOKEN */]: 'The usePublicVapidKey() method may only be called once and must be ' +
        'called before calling getToken() to ensure your VAPID key is used.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_3__.ErrorFactory('messaging', 'Messaging', ERROR_MAP);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function requestGetToken(firebaseDependencies, subscriptionOptions) {
    const headers = await getHeaders(firebaseDependencies);
    const body = getBody(subscriptionOptions);
    const subscribeOptions = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    let responseData;
    try {
        const response = await fetch(getEndpoint(firebaseDependencies.appConfig), subscribeOptions);
        responseData = await response.json();
    }
    catch (err) {
        throw ERROR_FACTORY.create("token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */, {
            errorInfo: err
        });
    }
    if (responseData.error) {
        const message = responseData.error.message;
        throw ERROR_FACTORY.create("token-subscribe-failed" /* TOKEN_SUBSCRIBE_FAILED */, {
            errorInfo: message
        });
    }
    if (!responseData.token) {
        throw ERROR_FACTORY.create("token-subscribe-no-token" /* TOKEN_SUBSCRIBE_NO_TOKEN */);
    }
    return responseData.token;
}
async function requestUpdateToken(firebaseDependencies, tokenDetails) {
    const headers = await getHeaders(firebaseDependencies);
    const body = getBody(tokenDetails.subscriptionOptions);
    const updateOptions = {
        method: 'PATCH',
        headers,
        body: JSON.stringify(body)
    };
    let responseData;
    try {
        const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${tokenDetails.token}`, updateOptions);
        responseData = await response.json();
    }
    catch (err) {
        throw ERROR_FACTORY.create("token-update-failed" /* TOKEN_UPDATE_FAILED */, {
            errorInfo: err
        });
    }
    if (responseData.error) {
        const message = responseData.error.message;
        throw ERROR_FACTORY.create("token-update-failed" /* TOKEN_UPDATE_FAILED */, {
            errorInfo: message
        });
    }
    if (!responseData.token) {
        throw ERROR_FACTORY.create("token-update-no-token" /* TOKEN_UPDATE_NO_TOKEN */);
    }
    return responseData.token;
}
async function requestDeleteToken(firebaseDependencies, token) {
    const headers = await getHeaders(firebaseDependencies);
    const unsubscribeOptions = {
        method: 'DELETE',
        headers
    };
    try {
        const response = await fetch(`${getEndpoint(firebaseDependencies.appConfig)}/${token}`, unsubscribeOptions);
        const responseData = await response.json();
        if (responseData.error) {
            const message = responseData.error.message;
            throw ERROR_FACTORY.create("token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */, {
                errorInfo: message
            });
        }
    }
    catch (err) {
        throw ERROR_FACTORY.create("token-unsubscribe-failed" /* TOKEN_UNSUBSCRIBE_FAILED */, {
            errorInfo: err
        });
    }
}
function getEndpoint({ projectId }) {
    return `${ENDPOINT}/projects/${projectId}/registrations`;
}
async function getHeaders({ appConfig, installations }) {
    const authToken = await installations.getToken();
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': appConfig.apiKey,
        'x-goog-firebase-installations-auth': `FIS ${authToken}`
    });
}
function getBody({ p256dh, auth, endpoint, vapidKey }) {
    const body = {
        web: {
            endpoint,
            auth,
            p256dh
        }
    };
    if (vapidKey !== DEFAULT_VAPID_KEY) {
        body.web.applicationPubKey = vapidKey;
    }
    return body;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// UpdateRegistration will be called once every week.
const TOKEN_EXPIRATION_MS = 7 * 24 * 60 * 60 * 1000; // 7 days
async function getTokenInternal(messaging) {
    const pushSubscription = await getPushSubscription(messaging.swRegistration, messaging.vapidKey);
    const subscriptionOptions = {
        vapidKey: messaging.vapidKey,
        swScope: messaging.swRegistration.scope,
        endpoint: pushSubscription.endpoint,
        auth: arrayToBase64(pushSubscription.getKey('auth')),
        p256dh: arrayToBase64(pushSubscription.getKey('p256dh'))
    };
    const tokenDetails = await dbGet(messaging.firebaseDependencies);
    if (!tokenDetails) {
        // No token, get a new one.
        return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
    }
    else if (!isTokenValid(tokenDetails.subscriptionOptions, subscriptionOptions)) {
        // Invalid token, get a new one.
        try {
            await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
        }
        catch (e) {
            // Suppress errors because of #2364
            console.warn(e);
        }
        return getNewToken(messaging.firebaseDependencies, subscriptionOptions);
    }
    else if (Date.now() >= tokenDetails.createTime + TOKEN_EXPIRATION_MS) {
        // Weekly token refresh
        return updateToken(messaging, {
            token: tokenDetails.token,
            createTime: Date.now(),
            subscriptionOptions
        });
    }
    else {
        // Valid token, nothing to do.
        return tokenDetails.token;
    }
}
/**
 * This method deletes the token from the database, unsubscribes the token from FCM, and unregisters
 * the push subscription if it exists.
 */
async function deleteTokenInternal(messaging) {
    const tokenDetails = await dbGet(messaging.firebaseDependencies);
    if (tokenDetails) {
        await requestDeleteToken(messaging.firebaseDependencies, tokenDetails.token);
        await dbRemove(messaging.firebaseDependencies);
    }
    // Unsubscribe from the push subscription.
    const pushSubscription = await messaging.swRegistration.pushManager.getSubscription();
    if (pushSubscription) {
        return pushSubscription.unsubscribe();
    }
    // If there's no SW, consider it a success.
    return true;
}
async function updateToken(messaging, tokenDetails) {
    try {
        const updatedToken = await requestUpdateToken(messaging.firebaseDependencies, tokenDetails);
        const updatedTokenDetails = Object.assign(Object.assign({}, tokenDetails), { token: updatedToken, createTime: Date.now() });
        await dbSet(messaging.firebaseDependencies, updatedTokenDetails);
        return updatedToken;
    }
    catch (e) {
        await deleteTokenInternal(messaging);
        throw e;
    }
}
async function getNewToken(firebaseDependencies, subscriptionOptions) {
    const token = await requestGetToken(firebaseDependencies, subscriptionOptions);
    const tokenDetails = {
        token,
        createTime: Date.now(),
        subscriptionOptions
    };
    await dbSet(firebaseDependencies, tokenDetails);
    return tokenDetails.token;
}
/**
 * Gets a PushSubscription for the current user.
 */
async function getPushSubscription(swRegistration, vapidKey) {
    const subscription = await swRegistration.pushManager.getSubscription();
    if (subscription) {
        return subscription;
    }
    return swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        // Chrome <= 75 doesn't support base64-encoded VAPID key. For backward compatibility, VAPID key
        // submitted to pushManager#subscribe must be of type Uint8Array.
        applicationServerKey: base64ToArray(vapidKey)
    });
}
/**
 * Checks if the saved tokenDetails object matches the configuration provided.
 */
function isTokenValid(dbOptions, currentOptions) {
    const isVapidKeyEqual = currentOptions.vapidKey === dbOptions.vapidKey;
    const isEndpointEqual = currentOptions.endpoint === dbOptions.endpoint;
    const isAuthEqual = currentOptions.auth === dbOptions.auth;
    const isP256dhEqual = currentOptions.p256dh === dbOptions.p256dh;
    return isVapidKeyEqual && isEndpointEqual && isAuthEqual && isP256dhEqual;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function externalizePayload(internalPayload) {
    const payload = {
        from: internalPayload.from,
        // eslint-disable-next-line camelcase
        collapseKey: internalPayload.collapse_key,
        // eslint-disable-next-line camelcase
        messageId: internalPayload.fcm_message_id
    };
    propagateNotificationPayload(payload, internalPayload);
    propagateDataPayload(payload, internalPayload);
    propagateFcmOptions(payload, internalPayload);
    return payload;
}
function propagateNotificationPayload(payload, messagePayloadInternal) {
    if (!messagePayloadInternal.notification) {
        return;
    }
    payload.notification = {};
    const title = messagePayloadInternal.notification.title;
    if (!!title) {
        payload.notification.title = title;
    }
    const body = messagePayloadInternal.notification.body;
    if (!!body) {
        payload.notification.body = body;
    }
    const image = messagePayloadInternal.notification.image;
    if (!!image) {
        payload.notification.image = image;
    }
}
function propagateDataPayload(payload, messagePayloadInternal) {
    if (!messagePayloadInternal.data) {
        return;
    }
    payload.data = messagePayloadInternal.data;
}
function propagateFcmOptions(payload, messagePayloadInternal) {
    if (!messagePayloadInternal.fcmOptions) {
        return;
    }
    payload.fcmOptions = {};
    const link = messagePayloadInternal.fcmOptions.link;
    if (!!link) {
        payload.fcmOptions.link = link;
    }
    // eslint-disable-next-line camelcase
    const analyticsLabel = messagePayloadInternal.fcmOptions.analytics_label;
    if (!!analyticsLabel) {
        payload.fcmOptions.analyticsLabel = analyticsLabel;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function isConsoleMessage(data) {
    // This message has a campaign ID, meaning it was sent using the Firebase Console.
    return typeof data === 'object' && !!data && CONSOLE_CAMPAIGN_ID in data;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
_mergeStrings('hts/frbslgigp.ogepscmv/ieo/eaylg', 'tp:/ieaeogn-agolai.o/1frlglgc/o');
_mergeStrings('AzSCbw63g1R0nCw85jG8', 'Iaya3yLKwmgvh7cF0q4');
async function stageLog(messaging, internalPayload) {
    const fcmEvent = createFcmEvent(internalPayload, await messaging.firebaseDependencies.installations.getId());
    createAndEnqueueLogEvent(messaging, fcmEvent);
}
function createFcmEvent(internalPayload, fid) {
    var _a, _b;
    const fcmEvent = {};
    /* eslint-disable camelcase */
    // some fields should always be non-null. Still check to ensure.
    if (!!internalPayload.from) {
        fcmEvent.project_number = internalPayload.from;
    }
    if (!!internalPayload.fcm_message_id) {
        fcmEvent.message_id = internalPayload.fcm_message_id;
    }
    fcmEvent.instance_id = fid;
    if (!!internalPayload.notification) {
        fcmEvent.message_type = MessageType$1.DISPLAY_NOTIFICATION.toString();
    }
    else {
        fcmEvent.message_type = MessageType$1.DATA_MESSAGE.toString();
    }
    fcmEvent.sdk_platform = SDK_PLATFORM_WEB.toString();
    fcmEvent.package_name = self.origin.replace(/(^\w+:|^)\/\//, '');
    if (!!internalPayload.collapse_key) {
        fcmEvent.collapse_key = internalPayload.collapse_key;
    }
    fcmEvent.event = EVENT_MESSAGE_DELIVERED.toString();
    if (!!((_a = internalPayload.fcmOptions) === null || _a === void 0 ? void 0 : _a.analytics_label)) {
        fcmEvent.analytics_label = (_b = internalPayload.fcmOptions) === null || _b === void 0 ? void 0 : _b.analytics_label;
    }
    /* eslint-enable camelcase */
    return fcmEvent;
}
function createAndEnqueueLogEvent(messaging, fcmEvent) {
    const logEvent = {};
    /* eslint-disable camelcase */
    logEvent.event_time_ms = Math.floor(Date.now()).toString();
    logEvent.source_extension_json_proto3 = JSON.stringify(fcmEvent);
    // eslint-disable-next-line camelcase
    messaging.logEvents.push(logEvent);
}
function _mergeStrings(s1, s2) {
    const resultArray = [];
    for (let i = 0; i < s1.length; i++) {
        resultArray.push(s1.charAt(i));
        if (i < s2.length) {
            resultArray.push(s2.charAt(i));
        }
    }
    return resultArray.join('');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function onSubChange(event, messaging) {
    var _a, _b;
    const { newSubscription } = event;
    if (!newSubscription) {
        // Subscription revoked, delete token
        await deleteTokenInternal(messaging);
        return;
    }
    const tokenDetails = await dbGet(messaging.firebaseDependencies);
    await deleteTokenInternal(messaging);
    messaging.vapidKey =
        (_b = (_a = tokenDetails === null || tokenDetails === void 0 ? void 0 : tokenDetails.subscriptionOptions) === null || _a === void 0 ? void 0 : _a.vapidKey) !== null && _b !== void 0 ? _b : DEFAULT_VAPID_KEY;
    await getTokenInternal(messaging);
}
async function onPush(event, messaging) {
    const internalPayload = getMessagePayloadInternal(event);
    if (!internalPayload) {
        // Failed to get parsed MessagePayload from the PushEvent. Skip handling the push.
        return;
    }
    // log to Firelog with user consent
    if (messaging.deliveryMetricsExportedToBigQueryEnabled) {
        await stageLog(messaging, internalPayload);
    }
    // foreground handling: eventually passed to onMessage hook
    const clientList = await getClientList();
    if (hasVisibleClients(clientList)) {
        return sendMessagePayloadInternalToWindows(clientList, internalPayload);
    }
    // background handling: display if possible and pass to onBackgroundMessage hook
    if (!!internalPayload.notification) {
        await showNotification(wrapInternalPayload(internalPayload));
    }
    if (!messaging) {
        return;
    }
    if (!!messaging.onBackgroundMessageHandler) {
        const payload = externalizePayload(internalPayload);
        if (typeof messaging.onBackgroundMessageHandler === 'function') {
            messaging.onBackgroundMessageHandler(payload);
        }
        else {
            messaging.onBackgroundMessageHandler.next(payload);
        }
    }
}
async function onNotificationClick(event) {
    var _a, _b;
    const internalPayload = (_b = (_a = event.notification) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b[FCM_MSG];
    if (!internalPayload) {
        return;
    }
    else if (event.action) {
        // User clicked on an action button. This will allow developers to act on action button clicks
        // by using a custom onNotificationClick listener that they define.
        return;
    }
    // Prevent other listeners from receiving the event
    event.stopImmediatePropagation();
    event.notification.close();
    // Note clicking on a notification with no link set will focus the Chrome's current tab.
    const link = getLink(internalPayload);
    if (!link) {
        return;
    }
    // FM should only open/focus links from app's origin.
    const url = new URL(link, self.location.href);
    const originUrl = new URL(self.location.origin);
    if (url.host !== originUrl.host) {
        return;
    }
    let client = await getWindowClient(url);
    if (!client) {
        client = await self.clients.openWindow(link);
        // Wait three seconds for the client to initialize and set up the message handler so that it
        // can receive the message.
        await sleep(3000);
    }
    else {
        client = await client.focus();
    }
    if (!client) {
        // Window Client will not be returned if it's for a third party origin.
        return;
    }
    internalPayload.messageType = MessageType.NOTIFICATION_CLICKED;
    internalPayload.isFirebaseMessaging = true;
    return client.postMessage(internalPayload);
}
function wrapInternalPayload(internalPayload) {
    const wrappedInternalPayload = Object.assign({}, internalPayload.notification);
    // Put the message payload under FCM_MSG name so we can identify the notification as being an FCM
    // notification vs a notification from somewhere else (i.e. normal web push or developer generated
    // notification).
    wrappedInternalPayload.data = {
        [FCM_MSG]: internalPayload
    };
    return wrappedInternalPayload;
}
function getMessagePayloadInternal({ data }) {
    if (!data) {
        return null;
    }
    try {
        return data.json();
    }
    catch (err) {
        // Not JSON so not an FCM message.
        return null;
    }
}
/**
 * @param url The URL to look for when focusing a client.
 * @return Returns an existing window client or a newly opened WindowClient.
 */
async function getWindowClient(url) {
    const clientList = await getClientList();
    for (const client of clientList) {
        const clientUrl = new URL(client.url, self.location.href);
        if (url.host === clientUrl.host) {
            return client;
        }
    }
    return null;
}
/**
 * @returns If there is currently a visible WindowClient, this method will resolve to true,
 * otherwise false.
 */
function hasVisibleClients(clientList) {
    return clientList.some(client => client.visibilityState === 'visible' &&
        // Ignore chrome-extension clients as that matches the background pages of extensions, which
        // are always considered visible for some reason.
        !client.url.startsWith('chrome-extension://'));
}
function sendMessagePayloadInternalToWindows(clientList, internalPayload) {
    internalPayload.isFirebaseMessaging = true;
    internalPayload.messageType = MessageType.PUSH_RECEIVED;
    for (const client of clientList) {
        client.postMessage(internalPayload);
    }
}
function getClientList() {
    return self.clients.matchAll({
        type: 'window',
        includeUncontrolled: true
        // TS doesn't know that "type: 'window'" means it'll return WindowClient[]
    });
}
function showNotification(notificationPayloadInternal) {
    var _a;
    // Note: Firefox does not support the maxActions property.
    // https://developer.mozilla.org/en-US/docs/Web/API/notification/maxActions
    const { actions } = notificationPayloadInternal;
    const { maxActions } = Notification;
    if (actions && maxActions && actions.length > maxActions) {
        console.warn(`This browser only supports ${maxActions} actions. The remaining actions will not be displayed.`);
    }
    return self.registration.showNotification(
    /* title= */ (_a = notificationPayloadInternal.title) !== null && _a !== void 0 ? _a : '', notificationPayloadInternal);
}
function getLink(payload) {
    var _a, _b, _c;
    // eslint-disable-next-line camelcase
    const link = (_b = (_a = payload.fcmOptions) === null || _a === void 0 ? void 0 : _a.link) !== null && _b !== void 0 ? _b : (_c = payload.notification) === null || _c === void 0 ? void 0 : _c.click_action;
    if (link) {
        return link;
    }
    if (isConsoleMessage(payload.data)) {
        // Notification created in the Firebase Console. Redirect to origin.
        return self.location.origin;
    }
    else {
        return null;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration Object');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    const configKeys = [
        'projectId',
        'apiKey',
        'appId',
        'messagingSenderId'
    ];
    const { options } = app;
    for (const keyName of configKeys) {
        if (!options[keyName]) {
            throw getMissingValueError(keyName);
        }
    }
    return {
        appName: app.name,
        projectId: options.projectId,
        apiKey: options.apiKey,
        appId: options.appId,
        senderId: options.messagingSenderId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* MISSING_APP_CONFIG_VALUES */, {
        valueName
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class MessagingService {
    constructor(app, installations, analyticsProvider) {
        // logging is only done with end user consent. Default to false.
        this.deliveryMetricsExportedToBigQueryEnabled = false;
        this.onBackgroundMessageHandler = null;
        this.onMessageHandler = null;
        this.logEvents = [];
        this.isLogServiceStarted = false;
        const appConfig = extractAppConfig(app);
        this.firebaseDependencies = {
            app,
            appConfig,
            installations,
            analyticsProvider
        };
    }
    _delete() {
        return Promise.resolve();
    }
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const SwMessagingFactory = (container) => {
    const messaging = new MessagingService(container.getProvider('app').getImmediate(), container.getProvider('installations-internal').getImmediate(), container.getProvider('analytics-internal'));
    self.addEventListener('push', e => {
        e.waitUntil(onPush(e, messaging));
    });
    self.addEventListener('pushsubscriptionchange', e => {
        e.waitUntil(onSubChange(e, messaging));
    });
    self.addEventListener('notificationclick', e => {
        e.waitUntil(onNotificationClick(e));
    });
    return messaging;
};
/**
 * The messaging instance registered in sw is named differently than that of in client. This is
 * because both `registerMessagingInWindow` and `registerMessagingInSw` would be called in
 * `messaging-compat` and component with the same name can only be registered once.
 */
function registerMessagingInSw() {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_4__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component('messaging-sw', SwMessagingFactory, "PUBLIC" /* PUBLIC */));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks whether all required APIs exist within SW Context
 * @returns a Promise that resolves to a boolean.
 *
 * @public
 */
async function isSwSupported() {
    // firebase-js-sdk/issues/2393 reveals that idb#open in Safari iframe and Firefox private browsing
    // might be prohibited to run. In these contexts, an error would be thrown during the messaging
    // instantiating phase, informing the developers to import/call isSupported for special handling.
    return ((await (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.validateIndexedDBOpenable)()) &&
        'indexedDB' in self &&
        indexedDB !== null &&
        'PushManager' in self &&
        'Notification' in self &&
        ServiceWorkerRegistration.prototype.hasOwnProperty('showNotification') &&
        PushSubscription.prototype.hasOwnProperty('getKey'));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function onBackgroundMessage$1(messaging, nextOrObserver) {
    if (self.document !== undefined) {
        throw ERROR_FACTORY.create("only-available-in-sw" /* AVAILABLE_IN_SW */);
    }
    messaging.onBackgroundMessageHandler = nextOrObserver;
    return () => {
        messaging.onBackgroundMessageHandler = null;
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable) {
    messaging.deliveryMetricsExportedToBigQueryEnabled =
        enable;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Retrieves a Firebase Cloud Messaging instance.
 *
 * @returns The Firebase Cloud Messaging instance associated with the provided firebase app.
 *
 * @public
 */
function getMessagingInSw(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_4__.getApp)()) {
    // Conscious decision to make this async check non-blocking during the messaging instance
    // initialization phase for performance consideration. An error would be thrown latter for
    // developer's information. Developers can then choose to import and call `isSupported` for
    // special handling.
    isSwSupported().then(isSupported => {
        // If `isSwSupported()` resolved, but returned false.
        if (!isSupported) {
            throw ERROR_FACTORY.create("unsupported-browser" /* UNSUPPORTED_BROWSER */);
        }
    }, _ => {
        // If `isSwSupported()` rejected.
        throw ERROR_FACTORY.create("indexed-db-unsupported" /* INDEXED_DB_UNSUPPORTED */);
    });
    return (0,_firebase_app__WEBPACK_IMPORTED_MODULE_4__._getProvider)((0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(app), 'messaging-sw').getImmediate();
}
/**
 * Called when a message is received while the app is in the background. An app is considered to be
 * in the background if no active window is displayed.
 *
 * @param messaging - The {@link Messaging} instance.
 * @param nextOrObserver - This function, or observer object with `next` defined, is called when a
 * message is received and the app is currently in the background.
 *
 * @returns To stop listening for messages execute this returned function
 *
 * @public
 */
function onBackgroundMessage(messaging, nextOrObserver) {
    messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(messaging);
    return onBackgroundMessage$1(messaging, nextOrObserver);
}
/**
 * Enables or disables Firebase Cloud Messaging message delivery metrics export to BigQuery. By
 * default, message delivery metrics are not exported to BigQuery. Use this method to enable or
 * disable the export at runtime.
 *
 * @param messaging - The `FirebaseMessaging` instance.
 * @param enable - Whether Firebase Cloud Messaging should export message delivery metrics to
 * BigQuery.
 *
 * @public
 */
function setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable) {
    messaging = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_3__.getModularInstance)(messaging);
    return _setDeliveryMetricsExportedToBigQueryEnabled(messaging, enable);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
registerMessagingInSw();


//# sourceMappingURL=index.sw.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS),
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "ErrorFactory": () => (/* binding */ ErrorFactory),
/* harmony export */   "FirebaseError": () => (/* binding */ FirebaseError),
/* harmony export */   "MAX_VALUE_MILLIS": () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   "RANDOM_FACTOR": () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   "Sha1": () => (/* binding */ Sha1),
/* harmony export */   "areCookiesEnabled": () => (/* binding */ areCookiesEnabled),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "assertionError": () => (/* binding */ assertionError),
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64Decode": () => (/* binding */ base64Decode),
/* harmony export */   "base64Encode": () => (/* binding */ base64Encode),
/* harmony export */   "base64urlEncodeWithoutPadding": () => (/* binding */ base64urlEncodeWithoutPadding),
/* harmony export */   "calculateBackoffMillis": () => (/* binding */ calculateBackoffMillis),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "createMockUserToken": () => (/* binding */ createMockUserToken),
/* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "errorPrefix": () => (/* binding */ errorPrefix),
/* harmony export */   "extractQuerystring": () => (/* binding */ extractQuerystring),
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "getModularInstance": () => (/* binding */ getModularInstance),
/* harmony export */   "getUA": () => (/* binding */ getUA),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isBrowserExtension": () => (/* binding */ isBrowserExtension),
/* harmony export */   "isElectron": () => (/* binding */ isElectron),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isIndexedDBAvailable": () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   "isMobileCordova": () => (/* binding */ isMobileCordova),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isNodeSdk": () => (/* binding */ isNodeSdk),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isUWP": () => (/* binding */ isUWP),
/* harmony export */   "isValidFormat": () => (/* binding */ isValidFormat),
/* harmony export */   "isValidTimestamp": () => (/* binding */ isValidTimestamp),
/* harmony export */   "issuedAtTime": () => (/* binding */ issuedAtTime),
/* harmony export */   "jsonEval": () => (/* binding */ jsonEval),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "ordinal": () => (/* binding */ ordinal),
/* harmony export */   "querystring": () => (/* binding */ querystring),
/* harmony export */   "querystringDecode": () => (/* binding */ querystringDecode),
/* harmony export */   "safeGet": () => (/* binding */ safeGet),
/* harmony export */   "stringLength": () => (/* binding */ stringLength),
/* harmony export */   "stringToByteArray": () => (/* binding */ stringToByteArray),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "validateArgCount": () => (/* binding */ validateArgCount),
/* harmony export */   "validateCallback": () => (/* binding */ validateCallback),
/* harmony export */   "validateContextObject": () => (/* binding */ validateContextObject),
/* harmony export */   "validateIndexedDBOpenable": () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   "validateNamespace": () => (/* binding */ validateNamespace)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
var base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    var header = {
        alg: 'none',
        type: 'JWT'
    };
    var project = projectId || 'demo-project';
    var iat = token.iat || 0;
    var sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    var payload = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({ 
        // Set all required fields to decent defaults
        iss: "https://securetoken.google.com/" + project, aud: project, iat: iat, exp: iat + 3600, auth_time: iat, sub: sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    var signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    var runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    var ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return 'indexedDB' in self && indexedDB != null;
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise(function (resolve, reject) {
        try {
            var preExist_1 = true;
            var DB_CHECK_NAME_1 = 'validate-browser-context-for-indexeddb-analytics-module';
            var request_1 = self.indexedDB.open(DB_CHECK_NAME_1);
            request_1.onsuccess = function () {
                request_1.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist_1) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME_1);
                }
                resolve(true);
            };
            request_1.onupgradeneeded = function () {
                preExist_1 = false;
            };
            request_1.onerror = function () {
                var _a;
                reject(((_a = request_1.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (!navigator || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(FirebaseError, _super);
    function FirebaseError(code, message, customData) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.customData = customData;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? String(value) : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    for (var _i = 0, aKeys_1 = aKeys; _i < aKeys_1.length; _i++) {
        var k = aKeys_1[_i];
        if (!bKeys.includes(k)) {
            return false;
        }
        var aProp = a[k];
        var bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (var _a = 0, bKeys_1 = bKeys; _a < bKeys_1.length; _a++) {
        var k = bKeys_1[_a];
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var _a = token.split('='), key = _a[0], value = _a[1];
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    var queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    var fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return fnName + " failed: " + argName + " argument ";
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
var DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
var DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
var RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis, backoffFactor) {
    if (intervalMillis === void 0) { intervalMillis = DEFAULT_INTERVAL_MILLIS; }
    if (backoffFactor === void 0) { backoffFactor = DEFAULT_BACKOFF_FACTOR; }
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    var currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    var randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return "" + i;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    var cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    var dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   "_clearComponents": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   "_components": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   "_getProvider": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   "_registerComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
/* harmony export */   "getApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   "getApps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
/* harmony export */   "initializeApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
/* harmony export */   "onLog": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
/* harmony export */   "registerVersion": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/index.esm2017.js");



var name = "firebase";
var version = "9.0.2";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/messaging/sw/dist/index.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/firebase/messaging/sw/dist/index.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "experimentalSetDeliveryMetricsExportedToBigQueryEnabled": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.experimentalSetDeliveryMetricsExportedToBigQueryEnabled),
/* harmony export */   "getMessaging": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.getMessaging),
/* harmony export */   "isSupported": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.isSupported),
/* harmony export */   "onBackgroundMessage": () => (/* reexport safe */ _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__.onBackgroundMessage)
/* harmony export */ });
/* harmony import */ var _firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/messaging/sw */ "./node_modules/@firebase/messaging/dist/index.sw.esm2017.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/idb/build/idb.js":
/*!***************************************!*\
  !*** ./node_modules/idb/build/idb.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
   true ? factory(exports) :
  0;
}(this, function (exports) { 'use strict';

  function toArray(arr) {
    return Array.prototype.slice.call(arr);
  }

  function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };

      request.onerror = function() {
        reject(request.error);
      };
    });
  }

  function promisifyRequestCall(obj, method, args) {
    var request;
    var p = new Promise(function(resolve, reject) {
      request = obj[method].apply(obj, args);
      promisifyRequest(request).then(resolve, reject);
    });

    p.request = request;
    return p;
  }

  function promisifyCursorRequestCall(obj, method, args) {
    var p = promisifyRequestCall(obj, method, args);
    return p.then(function(value) {
      if (!value) return;
      return new Cursor(value, p.request);
    });
  }

  function proxyProperties(ProxyClass, targetProp, properties) {
    properties.forEach(function(prop) {
      Object.defineProperty(ProxyClass.prototype, prop, {
        get: function() {
          return this[targetProp][prop];
        },
        set: function(val) {
          this[targetProp][prop] = val;
        }
      });
    });
  }

  function proxyRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function proxyMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return this[targetProp][prop].apply(this[targetProp], arguments);
      };
    });
  }

  function proxyCursorRequestMethods(ProxyClass, targetProp, Constructor, properties) {
    properties.forEach(function(prop) {
      if (!(prop in Constructor.prototype)) return;
      ProxyClass.prototype[prop] = function() {
        return promisifyCursorRequestCall(this[targetProp], prop, arguments);
      };
    });
  }

  function Index(index) {
    this._index = index;
  }

  proxyProperties(Index, '_index', [
    'name',
    'keyPath',
    'multiEntry',
    'unique'
  ]);

  proxyRequestMethods(Index, '_index', IDBIndex, [
    'get',
    'getKey',
    'getAll',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(Index, '_index', IDBIndex, [
    'openCursor',
    'openKeyCursor'
  ]);

  function Cursor(cursor, request) {
    this._cursor = cursor;
    this._request = request;
  }

  proxyProperties(Cursor, '_cursor', [
    'direction',
    'key',
    'primaryKey',
    'value'
  ]);

  proxyRequestMethods(Cursor, '_cursor', IDBCursor, [
    'update',
    'delete'
  ]);

  // proxy 'next' methods
  ['advance', 'continue', 'continuePrimaryKey'].forEach(function(methodName) {
    if (!(methodName in IDBCursor.prototype)) return;
    Cursor.prototype[methodName] = function() {
      var cursor = this;
      var args = arguments;
      return Promise.resolve().then(function() {
        cursor._cursor[methodName].apply(cursor._cursor, args);
        return promisifyRequest(cursor._request).then(function(value) {
          if (!value) return;
          return new Cursor(value, cursor._request);
        });
      });
    };
  });

  function ObjectStore(store) {
    this._store = store;
  }

  ObjectStore.prototype.createIndex = function() {
    return new Index(this._store.createIndex.apply(this._store, arguments));
  };

  ObjectStore.prototype.index = function() {
    return new Index(this._store.index.apply(this._store, arguments));
  };

  proxyProperties(ObjectStore, '_store', [
    'name',
    'keyPath',
    'indexNames',
    'autoIncrement'
  ]);

  proxyRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'put',
    'add',
    'delete',
    'clear',
    'get',
    'getAll',
    'getKey',
    'getAllKeys',
    'count'
  ]);

  proxyCursorRequestMethods(ObjectStore, '_store', IDBObjectStore, [
    'openCursor',
    'openKeyCursor'
  ]);

  proxyMethods(ObjectStore, '_store', IDBObjectStore, [
    'deleteIndex'
  ]);

  function Transaction(idbTransaction) {
    this._tx = idbTransaction;
    this.complete = new Promise(function(resolve, reject) {
      idbTransaction.oncomplete = function() {
        resolve();
      };
      idbTransaction.onerror = function() {
        reject(idbTransaction.error);
      };
      idbTransaction.onabort = function() {
        reject(idbTransaction.error);
      };
    });
  }

  Transaction.prototype.objectStore = function() {
    return new ObjectStore(this._tx.objectStore.apply(this._tx, arguments));
  };

  proxyProperties(Transaction, '_tx', [
    'objectStoreNames',
    'mode'
  ]);

  proxyMethods(Transaction, '_tx', IDBTransaction, [
    'abort'
  ]);

  function UpgradeDB(db, oldVersion, transaction) {
    this._db = db;
    this.oldVersion = oldVersion;
    this.transaction = new Transaction(transaction);
  }

  UpgradeDB.prototype.createObjectStore = function() {
    return new ObjectStore(this._db.createObjectStore.apply(this._db, arguments));
  };

  proxyProperties(UpgradeDB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(UpgradeDB, '_db', IDBDatabase, [
    'deleteObjectStore',
    'close'
  ]);

  function DB(db) {
    this._db = db;
  }

  DB.prototype.transaction = function() {
    return new Transaction(this._db.transaction.apply(this._db, arguments));
  };

  proxyProperties(DB, '_db', [
    'name',
    'version',
    'objectStoreNames'
  ]);

  proxyMethods(DB, '_db', IDBDatabase, [
    'close'
  ]);

  // Add cursor iterators
  // TODO: remove this once browsers do the right thing with promises
  ['openCursor', 'openKeyCursor'].forEach(function(funcName) {
    [ObjectStore, Index].forEach(function(Constructor) {
      // Don't create iterateKeyCursor if openKeyCursor doesn't exist.
      if (!(funcName in Constructor.prototype)) return;

      Constructor.prototype[funcName.replace('open', 'iterate')] = function() {
        var args = toArray(arguments);
        var callback = args[args.length - 1];
        var nativeObject = this._store || this._index;
        var request = nativeObject[funcName].apply(nativeObject, args.slice(0, -1));
        request.onsuccess = function() {
          callback(request.result);
        };
      };
    });
  });

  // polyfill getAll
  [Index, ObjectStore].forEach(function(Constructor) {
    if (Constructor.prototype.getAll) return;
    Constructor.prototype.getAll = function(query, count) {
      var instance = this;
      var items = [];

      return new Promise(function(resolve) {
        instance.iterateCursor(query, function(cursor) {
          if (!cursor) {
            resolve(items);
            return;
          }
          items.push(cursor.value);

          if (count !== undefined && items.length == count) {
            resolve(items);
            return;
          }
          cursor.continue();
        });
      });
    };
  });

  function openDb(name, version, upgradeCallback) {
    var p = promisifyRequestCall(indexedDB, 'open', [name, version]);
    var request = p.request;

    if (request) {
      request.onupgradeneeded = function(event) {
        if (upgradeCallback) {
          upgradeCallback(new UpgradeDB(request.result, event.oldVersion, request.transaction));
        }
      };
    }

    return p.then(function(db) {
      return new DB(db);
    });
  }

  function deleteDb(name) {
    return promisifyRequestCall(indexedDB, 'deleteDatabase', [name]);
  }

  exports.openDb = openDb;
  exports.deleteDb = deleteDb;

  Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************!*\
  !*** ./src/service-worker.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/messaging/sw */ "./node_modules/firebase/messaging/sw/dist/index.esm.js");
/// <reference lib="WebWorker" />


// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
var firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)({
    apiKey: "AIzaSyB-bvRwNZAWRCKEFVTxE-gErCE0Kg2YmX8",
    authDomain: "pdc-base.firebaseapp.com",
    projectId: "pdc-base",
    storageBucket: "pdc-base.appspot.com",
    messagingSenderId: "671716308705",
    appId: "1:671716308705:web:3a39142eb8eba6712ba9a0",
    measurementId: "G-71XRDCZDYE"
});
// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
var messaging = (0,firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_1__.getMessaging)(firebaseApp);
(0,firebase_messaging_sw__WEBPACK_IMPORTED_MODULE_1__.onBackgroundMessage)(messaging, function (payload) {
    var notif = payload.data;
    self.registration.showNotification(notif.message);
    console.log(payload);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2UtbWVzc2FnaW5nLXN3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0U7QUFDdUI7QUFDbEM7QUFDVjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixHQUFHLGdCQUFnQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFNOztBQUV6Qjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0JBQWdCLHNDQUFzQyxTQUFTO0FBQ2pHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGNBQWM7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxTQUFTO0FBQ3pEO0FBQ0EsOERBQThELFNBQVM7QUFDdkUsaUVBQWlFLFNBQVM7QUFDMUUsNkRBQTZELFNBQVM7QUFDdEUsb0VBQW9FLFNBQVM7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHdEQUFZOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsMERBQVM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLHFCQUFxQjtBQUMvRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBLG1DQUFtQyxpRUFBaUU7QUFDcEc7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLFlBQVkseURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGVBQWU7QUFDN0Y7QUFDQTtBQUNBLDBCQUEwQixtRUFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpQ0FBaUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTRELGVBQWU7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixRQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUSxrQkFBa0IsUUFBUTtBQUM3RTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxRQUFRO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFTLElBQUksUUFBUSxvQkFBb0Isa0JBQWtCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQWlCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFhO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMlI7QUFDM1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2tCZ0Y7QUFDdEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9EQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4Qyx3Q0FBd0M7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLCtDQUFRLG9EQUFvRCxVQUFVO0FBQ2hHLHlCQUF5Qiw2Q0FBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdEQUFTO0FBQ3hCO0FBQ0EsbUJBQW1CLGtEQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxvREFBYSxDQUFDLG9EQUFhLEtBQUssNkNBQU07QUFDL0YsNkRBQTZELCtCQUErQjtBQUM1RjtBQUNBLDBEQUEwRCxtQ0FBbUMsS0FBSyw2Q0FBTTtBQUN4Ryw2REFBNkQsOEJBQThCO0FBQzNGO0FBQ0EsMERBQTBELDJCQUEyQjtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsNERBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQVEsb0RBQW9ELFVBQVU7QUFDaEcseUJBQXlCLDZDQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywrQ0FBUSxpREFBaUQscUJBQXFCO0FBQ2pIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRWtEO0FBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM2MwRjtBQUMxQztBQUNhO0FBQ2hDOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVHQUF1RyxXQUFXO0FBQ2xIO0FBQ0E7QUFDQSwrQ0FBK0MsY0FBYyw0QkFBNEIsY0FBYyxjQUFjLEdBQUcsZUFBZTtBQUN2STtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQVk7QUFDdEM7QUFDQTtBQUNBLDZCQUE2Qix5REFBYTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0MsY0FBYyxzQkFBc0IsWUFBWSxVQUFVO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxzQkFBc0IsUUFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1QkFBdUIsRUFBRSxhQUFhO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELEtBQUs7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQixHQUFHLGdCQUFnQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlDQUF5QztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxtQ0FBbUM7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQsY0FBYyxvQ0FBb0MsR0FBRyxJQUFJO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGVBQWUsYUFBYSxzQ0FBc0M7QUFDbkg7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSx3QkFBd0IsV0FBVztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHdCQUF3QixhQUFhLHNDQUFzQztBQUN0SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZSxnQ0FBZ0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUNBQXlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QyxjQUFjLG9DQUFvQyxHQUFHLElBQUk7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hELElBQUksaUNBQWlDO0FBQ3JDLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFNO0FBQ3RDLDhCQUE4QiwyREFBWTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkRBQVk7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyREFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWtCLEtBQUssMERBQVM7QUFDcEMsSUFBSSxpRUFBa0IsS0FBSywwREFBUztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBZTs7QUFFK0Q7QUFDOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvbUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsUUFBUTtBQUMxRCx5Q0FBeUMsUUFBUTtBQUNqRCx5REFBeUQsUUFBUTtBQUNqRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHVCQUF1QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVCQUF1QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsNkNBQTZDLGFBQWE7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMseUJBQXlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlSaUM7QUFDZTtBQUNUO0FBQ3NEO0FBQ3BCOztBQUV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0NBQWtDOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwyQ0FBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFVBQVUsNkNBQVE7QUFDbEIsVUFBVSw2Q0FBUTtBQUNsQixVQUFVLDZDQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsV0FBVztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1R0FBdUcsV0FBVztBQUNsSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzSUFBc0kscUJBQXFCO0FBQzNKLHFIQUFxSCxXQUFXO0FBQ2hJO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQyw4R0FBOEcsV0FBVztBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsd0RBQVk7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyw0Q0FBNEMsR0FBRyxtQkFBbUI7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDRDQUE0QyxHQUFHLE1BQU07QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSx1QkFBdUIsV0FBVztBQUNsQyxjQUFjLFNBQVMsWUFBWSxVQUFVO0FBQzdDO0FBQ0EsNEJBQTRCLDBCQUEwQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFVBQVU7QUFDL0QsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLGtDQUFrQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsbUJBQW1CLDZDQUE2QztBQUNsSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QixZQUFZLGFBQWE7QUFDekI7QUFDQSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFrQixLQUFLLDBEQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIseUVBQXlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxREFBTTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxXQUFXLDJEQUFZLENBQUMsa0VBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQWtCO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdU07QUFDdk07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHVDNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOEJBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsK0NBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHFCQUFNO0FBQ3JCLGVBQWUscUJBQU07QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUJBQWlCLE1BQU0sSUFBSTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxHQUFHO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsWUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixhQUFhLFdBQVc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxxQkFBcUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLHFCQUFxQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCxnQkFBZ0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlCQUF5QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwyQkFBMkI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsdUJBQXVCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLHVCQUF1QjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFa3pCO0FBQ2x6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzcxRGdEO0FBQ2xCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQWU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnVDO0FBQ3ZDOzs7Ozs7Ozs7OztBQ0RBO0FBQ0EsRUFBRSxLQUE0RDtBQUM5RCxFQUFFLENBQ21EO0FBQ3JELENBQUMsNEJBQTRCOztBQUU3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlEQUFpRCxhQUFhOztBQUU5RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxnQkFBZ0Isc0NBQXNDLGtCQUFrQjtBQUNuRiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGlEQUFpRCxPQUFPO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELGNBQWM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ087QUFDUCxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ087QUFDUCw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ087QUFDUCxjQUFjLDZCQUE2QiwwQkFBMEIsY0FBYyxxQkFBcUI7QUFDeEcsaUJBQWlCLG9EQUFvRCxxRUFBcUUsY0FBYztBQUN4Six1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxtQ0FBbUMsU0FBUztBQUM1QyxtQ0FBbUMsV0FBVyxVQUFVO0FBQ3hELDBDQUEwQyxjQUFjO0FBQ3hEO0FBQ0EsOEdBQThHLE9BQU87QUFDckgsaUZBQWlGLGlCQUFpQjtBQUNsRyx5REFBeUQsZ0JBQWdCLFFBQVE7QUFDakYsK0NBQStDLGdCQUFnQixnQkFBZ0I7QUFDL0U7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBLFVBQVUsWUFBWSxhQUFhLFNBQVMsVUFBVTtBQUN0RCxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsbUNBQW1DLG9DQUFvQyxnQkFBZ0I7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2QkFBNkIsc0JBQXNCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGtEQUFrRCxRQUFRO0FBQzFELHlDQUF5QyxRQUFRO0FBQ2pELHlEQUF5RCxRQUFRO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCw2RUFBNkUsT0FBTztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxpQkFBaUIsdUZBQXVGLGNBQWM7QUFDdEgsdUJBQXVCLGdDQUFnQyxxQ0FBcUMsMkNBQTJDO0FBQ3ZJLDRCQUE0QixNQUFNLGlCQUFpQixZQUFZO0FBQy9ELHVCQUF1QjtBQUN2Qiw4QkFBOEI7QUFDOUIsNkJBQTZCO0FBQzdCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ087QUFDUDtBQUNBLGlCQUFpQiw2Q0FBNkMsVUFBVSxzREFBc0QsY0FBYztBQUM1SSwwQkFBMEIsNkJBQTZCLG9CQUFvQixnREFBZ0Qsa0JBQWtCO0FBQzdJO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSwyR0FBMkcsdUZBQXVGLGNBQWM7QUFDaE4sdUJBQXVCLDhCQUE4QixnREFBZ0Qsd0RBQXdEO0FBQzdKLDZDQUE2QyxzQ0FBc0MsVUFBVSxtQkFBbUIsSUFBSTtBQUNwSDtBQUNBO0FBQ087QUFDUCxpQ0FBaUMsdUNBQXVDLFlBQVksS0FBSyxPQUFPO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDRCQUE0QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM5T0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkEsaUNBQWlDO0FBT1c7QUFDNkI7QUFHekUsa0VBQWtFO0FBQ2xFLHFDQUFxQztBQUNyQywyREFBMkQ7QUFFM0QsSUFBTSxXQUFXLEdBQUcsMkRBQWEsQ0FBQztJQUNoQyxNQUFNLEVBQUUseUNBQW1CO0lBQzNCLFVBQVUsRUFBRSwwQkFBdUI7SUFDbkMsU0FBUyxFQUFFLFVBQXNCO0lBQ2pDLGFBQWEsRUFBRSxzQkFBMEI7SUFDekMsaUJBQWlCLEVBQUUsY0FBaUI7SUFDcEMsS0FBSyxFQUFFLDJDQUFrQjtJQUN6QixhQUFhLEVBQUUsY0FBc0I7Q0FDdEMsQ0FBQztBQUVGLDhFQUE4RTtBQUM5RSxZQUFZO0FBQ1osSUFBTSxTQUFTLEdBQUcsbUVBQVksQ0FBQyxXQUFXLENBQUM7QUFFM0MsMEVBQW1CLENBQUMsU0FBUyxFQUFFLFVBQUMsT0FBTztJQUNyQyxJQUFNLEtBQUssR0FBVyxPQUFPLENBQUMsSUFBVztJQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7QUFDdEIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmljZV93b3JrZXIvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vc2VydmljZV93b3JrZXIvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2NvbXBvbmVudC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9zZXJ2aWNlX3dvcmtlci8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vc2VydmljZV93b3JrZXIvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9zZXJ2aWNlX3dvcmtlci8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvbWVzc2FnaW5nL2Rpc3QvaW5kZXguc3cuZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly9zZXJ2aWNlX3dvcmtlci8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9zZXJ2aWNlX3dvcmtlci8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hcHAvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vc2VydmljZV93b3JrZXIvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvbWVzc2FnaW5nL3N3L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL3NlcnZpY2Vfd29ya2VyLy4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC9pZGIuanMiLCJ3ZWJwYWNrOi8vc2VydmljZV93b3JrZXIvLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovL3NlcnZpY2Vfd29ya2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NlcnZpY2Vfd29ya2VyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NlcnZpY2Vfd29ya2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zZXJ2aWNlX3dvcmtlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NlcnZpY2Vfd29ya2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2VydmljZV93b3JrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zZXJ2aWNlX3dvcmtlci8uL3NyYy9zZXJ2aWNlLXdvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbXBvbmVudENvbnRhaW5lciB9IGZyb20gJ0BmaXJlYmFzZS9jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9nZ2VyLCBzZXRVc2VyTG9nSGFuZGxlciwgc2V0TG9nTGV2ZWwgYXMgc2V0TG9nTGV2ZWwkMSB9IGZyb20gJ0BmaXJlYmFzZS9sb2dnZXInO1xuaW1wb3J0IHsgRXJyb3JGYWN0b3J5LCBkZWVwRXF1YWwgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5leHBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBQbGF0Zm9ybUxvZ2dlclNlcnZpY2VJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgLy8gSW4gaW5pdGlhbCBpbXBsZW1lbnRhdGlvbiwgdGhpcyB3aWxsIGJlIGNhbGxlZCBieSBpbnN0YWxsYXRpb25zIG9uXHJcbiAgICAvLyBhdXRoIHRva2VuIHJlZnJlc2gsIGFuZCBpbnN0YWxsYXRpb25zIHdpbGwgc2VuZCB0aGlzIHN0cmluZy5cclxuICAgIGdldFBsYXRmb3JtSW5mb1N0cmluZygpIHtcclxuICAgICAgICBjb25zdCBwcm92aWRlcnMgPSB0aGlzLmNvbnRhaW5lci5nZXRQcm92aWRlcnMoKTtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXHJcbiAgICAgICAgLy8gdmVyc2lvbiBjb21wb25lbnRzLlxyXG4gICAgICAgIHJldHVybiBwcm92aWRlcnNcclxuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gcHJvdmlkZXIuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7c2VydmljZS5saWJyYXJ5fS8ke3NlcnZpY2UudmVyc2lvbn1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGxvZ1N0cmluZyA9PiBsb2dTdHJpbmcpXHJcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBwcm92aWRlciBjaGVjayBpZiB0aGlzIHByb3ZpZGVyIHByb3ZpZGVzIGEgVmVyc2lvblNlcnZpY2VcclxuICpcclxuICogTk9URTogVXNpbmcgUHJvdmlkZXI8J2FwcC12ZXJzaW9uJz4gaXMgYSBoYWNrIHRvIGluZGljYXRlIHRoYXQgdGhlIHByb3ZpZGVyXHJcbiAqIHByb3ZpZGVzIFZlcnNpb25TZXJ2aWNlLiBUaGUgcHJvdmlkZXIgaXMgbm90IG5lY2Vzc2FyaWx5IGEgJ2FwcC12ZXJzaW9uJ1xyXG4gKiBwcm92aWRlci5cclxuICovXHJcbmZ1bmN0aW9uIGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikge1xyXG4gICAgY29uc3QgY29tcG9uZW50ID0gcHJvdmlkZXIuZ2V0Q29tcG9uZW50KCk7XHJcbiAgICByZXR1cm4gKGNvbXBvbmVudCA9PT0gbnVsbCB8fCBjb21wb25lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBvbmVudC50eXBlKSA9PT0gXCJWRVJTSU9OXCIgLyogVkVSU0lPTiAqLztcclxufVxuXG5jb25zdCBuYW1lJG8gPSBcIkBmaXJlYmFzZS9hcHBcIjtcbmNvbnN0IHZlcnNpb24kMSA9IFwiMC43LjBcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignQGZpcmViYXNlL2FwcCcpO1xuXG5jb25zdCBuYW1lJG4gPSBcIkBmaXJlYmFzZS9hcHAtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkbSA9IFwiQGZpcmViYXNlL2FuYWx5dGljcy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRsID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5cbmNvbnN0IG5hbWUkayA9IFwiQGZpcmViYXNlL2FwcC1jaGVjay1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRqID0gXCJAZmlyZWJhc2UvYXBwLWNoZWNrXCI7XG5cbmNvbnN0IG5hbWUkaSA9IFwiQGZpcmViYXNlL2F1dGhcIjtcblxuY29uc3QgbmFtZSRoID0gXCJAZmlyZWJhc2UvYXV0aC1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRnID0gXCJAZmlyZWJhc2UvZGF0YWJhc2VcIjtcblxuY29uc3QgbmFtZSRmID0gXCJAZmlyZWJhc2UvZGF0YWJhc2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkZSA9IFwiQGZpcmViYXNlL2Z1bmN0aW9uc1wiO1xuXG5jb25zdCBuYW1lJGQgPSBcIkBmaXJlYmFzZS9mdW5jdGlvbnMtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkYyA9IFwiQGZpcmViYXNlL2luc3RhbGxhdGlvbnNcIjtcblxuY29uc3QgbmFtZSRiID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9ucy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRhID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nXCI7XG5cbmNvbnN0IG5hbWUkOSA9IFwiQGZpcmViYXNlL21lc3NhZ2luZy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ4ID0gXCJAZmlyZWJhc2UvcGVyZm9ybWFuY2VcIjtcblxuY29uc3QgbmFtZSQ3ID0gXCJAZmlyZWJhc2UvcGVyZm9ybWFuY2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkNiA9IFwiQGZpcmViYXNlL3JlbW90ZS1jb25maWdcIjtcblxuY29uc3QgbmFtZSQ1ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ0ID0gXCJAZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG5jb25zdCBuYW1lJDMgPSBcIkBmaXJlYmFzZS9zdG9yYWdlLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDIgPSBcIkBmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgbmFtZSQxID0gXCJAZmlyZWJhc2UvZmlyZXN0b3JlLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lID0gXCJmaXJlYmFzZVwiO1xuY29uc3QgdmVyc2lvbiA9IFwiOS4wLjBcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGFwcCBuYW1lXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XHJcbmNvbnN0IFBMQVRGT1JNX0xPR19TVFJJTkcgPSB7XHJcbiAgICBbbmFtZSRvXTogJ2ZpcmUtY29yZScsXHJcbiAgICBbbmFtZSRuXTogJ2ZpcmUtY29yZS1jb21wYXQnLFxyXG4gICAgW25hbWUkbF06ICdmaXJlLWFuYWx5dGljcycsXHJcbiAgICBbbmFtZSRtXTogJ2ZpcmUtYW5hbHl0aWNzLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRqXTogJ2ZpcmUtYXBwLWNoZWNrJyxcclxuICAgIFtuYW1lJGtdOiAnZmlyZS1hcHAtY2hlY2stY29tcGF0JyxcclxuICAgIFtuYW1lJGldOiAnZmlyZS1hdXRoJyxcclxuICAgIFtuYW1lJGhdOiAnZmlyZS1hdXRoLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRnXTogJ2ZpcmUtcnRkYicsXHJcbiAgICBbbmFtZSRmXTogJ2ZpcmUtcnRkYi1jb21wYXQnLFxyXG4gICAgW25hbWUkZV06ICdmaXJlLWZuJyxcclxuICAgIFtuYW1lJGRdOiAnZmlyZS1mbi1jb21wYXQnLFxyXG4gICAgW25hbWUkY106ICdmaXJlLWlpZCcsXHJcbiAgICBbbmFtZSRiXTogJ2ZpcmUtaWlkLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRhXTogJ2ZpcmUtZmNtJyxcclxuICAgIFtuYW1lJDldOiAnZmlyZS1mY20tY29tcGF0JyxcclxuICAgIFtuYW1lJDhdOiAnZmlyZS1wZXJmJyxcclxuICAgIFtuYW1lJDddOiAnZmlyZS1wZXJmLWNvbXBhdCcsXHJcbiAgICBbbmFtZSQ2XTogJ2ZpcmUtcmMnLFxyXG4gICAgW25hbWUkNV06ICdmaXJlLXJjLWNvbXBhdCcsXHJcbiAgICBbbmFtZSQ0XTogJ2ZpcmUtZ2NzJyxcclxuICAgIFtuYW1lJDNdOiAnZmlyZS1nY3MtY29tcGF0JyxcclxuICAgIFtuYW1lJDJdOiAnZmlyZS1mc3QnLFxyXG4gICAgW25hbWUkMV06ICdmaXJlLWZzdC1jb21wYXQnLFxyXG4gICAgJ2ZpcmUtanMnOiAnZmlyZS1qcycsXHJcbiAgICBbbmFtZV06ICdmaXJlLWpzLWFsbCdcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuY29uc3QgX2FwcHMgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBSZWdpc3RlcmVkIGNvbXBvbmVudHMuXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuY29uc3QgX2NvbXBvbmVudHMgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCBiZWluZyBhZGRlZCB0byB0aGlzIGFwcCdzIGNvbnRhaW5lclxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9hZGRDb21wb25lbnQoYXBwLCBjb21wb25lbnQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXBwLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZmFpbGVkIHRvIHJlZ2lzdGVyIHdpdGggRmlyZWJhc2VBcHAgJHthcHAubmFtZX1gLCBlKTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoYXBwLCBjb21wb25lbnQpIHtcclxuICAgIGFwcC5jb250YWluZXIuYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoY29tcG9uZW50KTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGNvbXBvbmVudCAtIHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXJcclxuICogQHJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGNvbXBvbmVudCBpcyByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9yZWdpc3RlckNvbXBvbmVudChjb21wb25lbnQpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQubmFtZTtcclxuICAgIGlmIChfY29tcG9uZW50cy5oYXMoY29tcG9uZW50TmFtZSkpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoYFRoZXJlIHdlcmUgbXVsdGlwbGUgYXR0ZW1wdHMgdG8gcmVnaXN0ZXIgY29tcG9uZW50ICR7Y29tcG9uZW50TmFtZX0uYCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgX2NvbXBvbmVudHMuc2V0KGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudCk7XHJcbiAgICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byBleGlzdGluZyBhcHAgaW5zdGFuY2VzXHJcbiAgICBmb3IgKGNvbnN0IGFwcCBvZiBfYXBwcy52YWx1ZXMoKSkge1xyXG4gICAgICAgIF9hZGRDb21wb25lbnQoYXBwLCBjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhcHAgLSBGaXJlYmFzZUFwcCBpbnN0YW5jZVxyXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxyXG4gKlxyXG4gKiBAcmV0dXJucyB0aGUgcHJvdmlkZXIgZm9yIHRoZSBzZXJ2aWNlIHdpdGggdGhlIG1hdGNoaW5nIG5hbWVcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfZ2V0UHJvdmlkZXIoYXBwLCBuYW1lKSB7XHJcbiAgICByZXR1cm4gYXBwLmNvbnRhaW5lci5nZXRQcm92aWRlcihuYW1lKTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXHJcbiAqIEBwYXJhbSBpbnN0YW5jZUlkZW50aWZpZXIgLSBzZXJ2aWNlIGluc3RhbmNlIGlkZW50aWZpZXIgaW4gY2FzZSB0aGUgc2VydmljZSBzdXBwb3J0cyBtdWx0aXBsZSBpbnN0YW5jZXNcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5mdW5jdGlvbiBfcmVtb3ZlU2VydmljZUluc3RhbmNlKGFwcCwgbmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICBfZ2V0UHJvdmlkZXIoYXBwLCBuYW1lKS5jbGVhckluc3RhbmNlKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbn1cclxuLyoqXHJcbiAqIFRlc3Qgb25seVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9jbGVhckNvbXBvbmVudHMoKSB7XHJcbiAgICBfY29tcG9uZW50cy5jbGVhcigpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IEVSUk9SUyA9IHtcclxuICAgIFtcIm5vLWFwcFwiIC8qIE5PX0FQUCAqL106IFwiTm8gRmlyZWJhc2UgQXBwICd7JGFwcE5hbWV9JyBoYXMgYmVlbiBjcmVhdGVkIC0gXCIgK1xyXG4gICAgICAgICdjYWxsIEZpcmViYXNlIEFwcC5pbml0aWFsaXplQXBwKCknLFxyXG4gICAgW1wiYmFkLWFwcC1uYW1lXCIgLyogQkFEX0FQUF9OQU1FICovXTogXCJJbGxlZ2FsIEFwcCBuYW1lOiAneyRhcHBOYW1lfVwiLFxyXG4gICAgW1wiZHVwbGljYXRlLWFwcFwiIC8qIERVUExJQ0FURV9BUFAgKi9dOiBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBleGlzdHMgd2l0aCBkaWZmZXJlbnQgb3B0aW9ucyBvciBjb25maWdcIixcclxuICAgIFtcImFwcC1kZWxldGVkXCIgLyogQVBQX0RFTEVURUQgKi9dOiBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBkZWxldGVkXCIsXHJcbiAgICBbXCJpbnZhbGlkLWFwcC1hcmd1bWVudFwiIC8qIElOVkFMSURfQVBQX0FSR1VNRU5UICovXTogJ2ZpcmViYXNlLnskYXBwTmFtZX0oKSB0YWtlcyBlaXRoZXIgbm8gYXJndW1lbnQgb3IgYSAnICtcclxuICAgICAgICAnRmlyZWJhc2UgQXBwIGluc3RhbmNlLicsXHJcbiAgICBbXCJpbnZhbGlkLWxvZy1hcmd1bWVudFwiIC8qIElOVkFMSURfTE9HX0FSR1VNRU5UICovXTogJ0ZpcnN0IGFyZ3VtZW50IHRvIGBvbkxvZ2AgbXVzdCBiZSBudWxsIG9yIGEgZnVuY3Rpb24uJ1xyXG59O1xyXG5jb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeSgnYXBwJywgJ0ZpcmViYXNlJywgRVJST1JTKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRmlyZWJhc2VBcHBJbXBsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9XHJcbiAgICAgICAgICAgIGNvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFkZENvbXBvbmVudChuZXcgQ29tcG9uZW50KCdhcHAnLCAoKSA9PiB0aGlzLCBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLykpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCgpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcclxuICAgIH1cclxuICAgIHNldCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQodmFsKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHRoaXMuX2F1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIGdldCBvcHRpb25zKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3B0aW9ucztcclxuICAgIH1cclxuICAgIGdldCBjb25maWcoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XHJcbiAgICB9XHJcbiAgICBnZXQgY29udGFpbmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEZWxldGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0RlbGV0ZWQ7XHJcbiAgICB9XHJcbiAgICBzZXQgaXNEZWxldGVkKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX2lzRGVsZXRlZCA9IHZhbDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cclxuICAgICAqIHVzZSBiZWZvcmUgcGVyZm9ybWluZyBBUEkgYWN0aW9ucyBvbiB0aGUgQXBwLlxyXG4gICAgICovXHJcbiAgICBjaGVja0Rlc3Ryb3llZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtZGVsZXRlZFwiIC8qIEFQUF9ERUxFVEVEICovLCB7IGFwcE5hbWU6IHRoaXMuX25hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaGUgY3VycmVudCBTREsgdmVyc2lvbi5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuY29uc3QgU0RLX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5mdW5jdGlvbiBpbml0aWFsaXplQXBwKG9wdGlvbnMsIHJhd0NvbmZpZyA9IHt9KSB7XHJcbiAgICBpZiAodHlwZW9mIHJhd0NvbmZpZyAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gcmF3Q29uZmlnO1xyXG4gICAgICAgIHJhd0NvbmZpZyA9IHsgbmFtZSB9O1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IG5hbWU6IERFRkFVTFRfRU5UUllfTkFNRSwgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiBmYWxzZSB9LCByYXdDb25maWcpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNvbmZpZy5uYW1lO1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCAhbmFtZSkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYmFkLWFwcC1uYW1lXCIgLyogQkFEX0FQUF9OQU1FICovLCB7XHJcbiAgICAgICAgICAgIGFwcE5hbWU6IFN0cmluZyhuYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZXhpc3RpbmdBcHAgPSBfYXBwcy5nZXQobmFtZSk7XHJcbiAgICBpZiAoZXhpc3RpbmdBcHApIHtcclxuICAgICAgICAvLyByZXR1cm4gdGhlIGV4aXN0aW5nIGFwcCBpZiBvcHRpb25zIGFuZCBjb25maWcgZGVlcCBlcXVhbCB0aGUgb25lcyBpbiB0aGUgZXhpc3RpbmcgYXBwLlxyXG4gICAgICAgIGlmIChkZWVwRXF1YWwob3B0aW9ucywgZXhpc3RpbmdBcHAub3B0aW9ucykgJiZcclxuICAgICAgICAgICAgZGVlcEVxdWFsKGNvbmZpZywgZXhpc3RpbmdBcHAuY29uZmlnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdBcHA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImR1cGxpY2F0ZS1hcHBcIiAvKiBEVVBMSUNBVEVfQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbXBvbmVudENvbnRhaW5lcihuYW1lKTtcclxuICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIF9jb21wb25lbnRzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3QXBwID0gbmV3IEZpcmViYXNlQXBwSW1wbChvcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XHJcbiAgICBfYXBwcy5zZXQobmFtZSwgbmV3QXBwKTtcclxuICAgIHJldHVybiBuZXdBcHA7XHJcbn1cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cclxuICpcclxuICogV2hlbiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC4gV2hlbiBhbiBhcHAgbmFtZVxyXG4gKiBpcyBwcm92aWRlZCwgdGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoYXQgbmFtZSBpcyByZXR1cm5lZC5cclxuICpcclxuICogQW4gZXhjZXB0aW9uIGlzIHRocm93biBpZiB0aGUgYXBwIGJlaW5nIHJldHJpZXZlZCBoYXMgbm90IHlldCBiZWVuXHJcbiAqIGluaXRpYWxpemVkLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIC8vIFJldHVybiB0aGUgZGVmYXVsdCBhcHBcclxuICogY29uc3QgYXBwID0gZ2V0QXBwKCk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIC8vIFJldHVybiBhIG5hbWVkIGFwcFxyXG4gKiBjb25zdCBvdGhlckFwcCA9IGdldEFwcChcIm90aGVyQXBwXCIpO1xyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIG5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBhcHAgdG8gcmV0dXJuLiBJZiBubyBuYW1lIGlzXHJcbiAqICAgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGlzIGBcIltERUZBVUxUXVwiYC5cclxuICpcclxuICogQHJldHVybnMgVGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm92aWRlZCBhcHAgbmFtZS5cclxuICogICBJZiBubyBhcHAgbmFtZSBpcyBwcm92aWRlZCwgdGhlIGRlZmF1bHQgYXBwIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBcHAobmFtZSA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgY29uc3QgYXBwID0gX2FwcHMuZ2V0KG5hbWUpO1xyXG4gICAgaWYgKCFhcHApIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLWFwcFwiIC8qIE5PX0FQUCAqLywgeyBhcHBOYW1lOiBuYW1lIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcDtcclxufVxyXG4vKipcclxuICogQSAocmVhZC1vbmx5KSBhcnJheSBvZiBhbGwgaW5pdGlhbGl6ZWQgYXBwcy5cclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0QXBwcygpIHtcclxuICAgIHJldHVybiBBcnJheS5mcm9tKF9hcHBzLnZhbHVlcygpKTtcclxufVxyXG4vKipcclxuICogUmVuZGVycyB0aGlzIGFwcCB1bnVzYWJsZSBhbmQgZnJlZXMgdGhlIHJlc291cmNlcyBvZiBhbGwgYXNzb2NpYXRlZFxyXG4gKiBzZXJ2aWNlcy5cclxuICpcclxuICogQGV4YW1wbGVcclxuICogYGBgamF2YXNjcmlwdFxyXG4gKiBkZWxldGVBcHAoYXBwKVxyXG4gKiAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJBcHAgZGVsZXRlZCBzdWNjZXNzZnVsbHlcIik7XHJcbiAqICAgfSlcclxuICogICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICogICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgZGVsZXRpbmcgYXBwOlwiLCBlcnJvcik7XHJcbiAqICAgfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVBcHAoYXBwKSB7XHJcbiAgICBjb25zdCBuYW1lID0gYXBwLm5hbWU7XHJcbiAgICBpZiAoX2FwcHMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgX2FwcHMuZGVsZXRlKG5hbWUpO1xyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFwcC5jb250YWluZXJcclxuICAgICAgICAgICAgLmdldFByb3ZpZGVycygpXHJcbiAgICAgICAgICAgIC5tYXAocHJvdmlkZXIgPT4gcHJvdmlkZXIuZGVsZXRlKCkpKTtcclxuICAgICAgICBhcHAuaXNEZWxldGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogUmVnaXN0ZXJzIGEgbGlicmFyeSdzIG5hbWUgYW5kIHZlcnNpb24gZm9yIHBsYXRmb3JtIGxvZ2dpbmcgcHVycG9zZXMuXHJcbiAqIEBwYXJhbSBsaWJyYXJ5IC0gTmFtZSBvZiAxcCBvciAzcCBsaWJyYXJ5IChlLmcuIGZpcmVzdG9yZSwgYW5ndWxhcmZpcmUpXHJcbiAqIEBwYXJhbSB2ZXJzaW9uIC0gQ3VycmVudCB2ZXJzaW9uIG9mIHRoYXQgbGlicmFyeS5cclxuICogQHBhcmFtIHZhcmlhbnQgLSBCdW5kbGUgdmFyaWFudCwgZS5nLiwgbm9kZSwgcm4sIGV0Yy5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXJWZXJzaW9uKGxpYnJhcnlLZXlPck5hbWUsIHZlcnNpb24sIHZhcmlhbnQpIHtcclxuICAgIHZhciBfYTtcclxuICAgIC8vIFRPRE86IFdlIGNhbiB1c2UgdGhpcyBjaGVjayB0byB3aGl0ZWxpc3Qgc3RyaW5ncyB3aGVuL2lmIHdlIHNldCB1cFxyXG4gICAgLy8gYSBnb29kIHdoaXRlbGlzdCBzeXN0ZW0uXHJcbiAgICBsZXQgbGlicmFyeSA9IChfYSA9IFBMQVRGT1JNX0xPR19TVFJJTkdbbGlicmFyeUtleU9yTmFtZV0pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGxpYnJhcnlLZXlPck5hbWU7XHJcbiAgICBpZiAodmFyaWFudCkge1xyXG4gICAgICAgIGxpYnJhcnkgKz0gYC0ke3ZhcmlhbnR9YDtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpYnJhcnlNaXNtYXRjaCA9IGxpYnJhcnkubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgIGNvbnN0IHZlcnNpb25NaXNtYXRjaCA9IHZlcnNpb24ubWF0Y2goL1xcc3xcXC8vKTtcclxuICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2ggfHwgdmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgY29uc3Qgd2FybmluZyA9IFtcclxuICAgICAgICAgICAgYFVuYWJsZSB0byByZWdpc3RlciBsaWJyYXJ5IFwiJHtsaWJyYXJ5fVwiIHdpdGggdmVyc2lvbiBcIiR7dmVyc2lvbn1cIjpgXHJcbiAgICAgICAgXTtcclxuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcucHVzaChgbGlicmFyeSBuYW1lIFwiJHtsaWJyYXJ5fVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCAmJiB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKCdhbmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goYHZlcnNpb24gbmFtZSBcIiR7dmVyc2lvbn1cIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXCIvXCIpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmcuam9pbignICcpKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChgJHtsaWJyYXJ5fS12ZXJzaW9uYCwgKCkgPT4gKHsgbGlicmFyeSwgdmVyc2lvbiB9KSwgXCJWRVJTSU9OXCIgLyogVkVSU0lPTiAqLykpO1xyXG59XHJcbi8qKlxyXG4gKiBTZXRzIGxvZyBoYW5kbGVyIGZvciBhbGwgRmlyZWJhc2UgU0RLcy5cclxuICogQHBhcmFtIGxvZ0NhbGxiYWNrIC0gQW4gb3B0aW9uYWwgY3VzdG9tIGxvZyBoYW5kbGVyIHRoYXQgZXhlY3V0ZXMgdXNlciBjb2RlIHdoZW5ldmVyXHJcbiAqIHRoZSBGaXJlYmFzZSBTREsgbWFrZXMgYSBsb2dnaW5nIGNhbGwuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIG9uTG9nKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBpZiAobG9nQ2FsbGJhY2sgIT09IG51bGwgJiYgdHlwZW9mIGxvZ0NhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnZhbGlkLWxvZy1hcmd1bWVudFwiIC8qIElOVkFMSURfTE9HX0FSR1VNRU5UICovKTtcclxuICAgIH1cclxuICAgIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKTtcclxufVxyXG4vKipcclxuICogU2V0cyBsb2cgbGV2ZWwgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxyXG4gKlxyXG4gKiBBbGwgb2YgdGhlIGxvZyB0eXBlcyBhYm92ZSB0aGUgY3VycmVudCBsb2cgbGV2ZWwgYXJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgaW5mb2AsIGVycm9ycyBhcmUgbG9nZ2VkLCBidXQgYGRlYnVnYCBhbmRcclxuICogYHZlcmJvc2VgIGxvZ3MgYXJlIG5vdCkuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxvZ0xldmVsKSB7XHJcbiAgICBzZXRMb2dMZXZlbCQxKGxvZ0xldmVsKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckNvcmVDb21wb25lbnRzKHZhcmlhbnQpIHtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KCdwbGF0Zm9ybS1sb2dnZXInLCBjb250YWluZXIgPT4gbmV3IFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwoY29udGFpbmVyKSwgXCJQUklWQVRFXCIgLyogUFJJVkFURSAqLykpO1xyXG4gICAgLy8gUmVnaXN0ZXIgYGFwcGAgcGFja2FnZS5cclxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJG8sIHZlcnNpb24kMSwgdmFyaWFudCk7XHJcbiAgICAvLyBSZWdpc3RlciBwbGF0Zm9ybSBTREsgaWRlbnRpZmllciAobm8gdmVyc2lvbikuXHJcbiAgICByZWdpc3RlclZlcnNpb24oJ2ZpcmUtanMnLCAnJyk7XHJcbn1cblxuLyoqXHJcbiAqIEZpcmViYXNlIEFwcFxyXG4gKlxyXG4gKiBAcmVtYXJrcyBUaGlzIHBhY2thZ2UgY29vcmRpbmF0ZXMgdGhlIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IEZpcmViYXNlIGNvbXBvbmVudHNcclxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXHJcbiAqL1xyXG5yZWdpc3RlckNvcmVDb21wb25lbnRzKCk7XG5cbmV4cG9ydCB7IFNES19WRVJTSU9OLCBERUZBVUxUX0VOVFJZX05BTUUgYXMgX0RFRkFVTFRfRU5UUllfTkFNRSwgX2FkZENvbXBvbmVudCwgX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50LCBfYXBwcywgX2NsZWFyQ29tcG9uZW50cywgX2NvbXBvbmVudHMsIF9nZXRQcm92aWRlciwgX3JlZ2lzdGVyQ29tcG9uZW50LCBfcmVtb3ZlU2VydmljZUluc3RhbmNlLCBkZWxldGVBcHAsIGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCwgb25Mb2csIHJlZ2lzdGVyVmVyc2lvbiwgc2V0TG9nTGV2ZWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyBfX3ZhbHVlcywgX19yZWFkLCBfX2F3YWl0ZXIsIF9fZ2VuZXJhdG9yLCBfX3NwcmVhZEFycmF5IH0gZnJvbSAndHNsaWInO1xuaW1wb3J0IHsgRGVmZXJyZWQgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5cbi8qKlxyXG4gKiBDb21wb25lbnQgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuIGBhdXRoYCwgYGF1dGgtaW50ZXJuYWxgXHJcbiAqL1xyXG52YXIgQ29tcG9uZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIHB1YmxpYyBzZXJ2aWNlIG5hbWUsIGUuZy4gYXBwLCBhdXRoLCBmaXJlc3RvcmUsIGRhdGFiYXNlXHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2VGYWN0b3J5IFNlcnZpY2UgZmFjdG9yeSByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhlIHB1YmxpYyBpbnRlcmZhY2VcclxuICAgICAqIEBwYXJhbSB0eXBlIHdoZXRoZXIgdGhlIHNlcnZpY2UgcHJvdmlkZWQgYnkgdGhlIGNvbXBvbmVudCBpcyBwdWJsaWMgb3IgcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBDb21wb25lbnQobmFtZSwgaW5zdGFuY2VGYWN0b3J5LCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlRmFjdG9yeSA9IGluc3RhbmNlRmFjdG9yeTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBmYWxzZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBQcm9wZXJ0aWVzIHRvIGJlIGFkZGVkIHRvIHRoZSBzZXJ2aWNlIG5hbWVzcGFjZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuc2VydmljZVByb3BzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0aW9uTW9kZSA9IFwiTEFaWVwiIC8qIExBWlkgKi87XHJcbiAgICAgICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldEluc3RhbnRpYXRpb25Nb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Nb2RlID0gbW9kZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldE11bHRpcGxlSW5zdGFuY2VzID0gZnVuY3Rpb24gKG11bHRpcGxlSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyA9IG11bHRpcGxlSW5zdGFuY2VzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIENvbXBvbmVudC5wcm90b3R5cGUuc2V0U2VydmljZVByb3BzID0gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2aWNlUHJvcHMgPSBwcm9wcztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBDb21wb25lbnQucHJvdG90eXBlLnNldEluc3RhbmNlQ3JlYXRlZENhbGxiYWNrID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnQ7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGVyIGZvciBpbnN0YW5jZSBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gJ2F1dGgnLCAnYXV0aC1pbnRlcm5hbCdcclxuICogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIGlzIGFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2VcclxuICovXHJcbnZhciBQcm92aWRlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFByb3ZpZGVyKG5hbWUsIGNvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gaWRlbnRpZmllciBBIHByb3ZpZGVyIGNhbiBwcm92aWRlIG11bGl0cGxlIGluc3RhbmNlcyBvZiBhIHNlcnZpY2VcclxuICAgICAqIGlmIHRoaXMuY29tcG9uZW50Lm11bHRpcGxlSW5zdGFuY2VzIGlzIHRydWUuXHJcbiAgICAgKi9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlc0RlZmVycmVkLmhhcyhub3JtYWxpemVkSWRlbnRpZmllcikpIHtcclxuICAgICAgICAgICAgdmFyIGRlZmVycmVkID0gbmV3IERlZmVycmVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBkZWZlcnJlZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW5pdGlhbGl6ZWQobm9ybWFsaXplZElkZW50aWZpZXIpIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgdGhlIHNlcnZpY2UgaWYgaXQgY2FuIGJlIGF1dG8taW5pdGlhbGl6ZWRcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgZ2V0KCksIGl0IHNob3VsZCBub3QgY2F1c2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IHJldHVybiB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpLnByb21pc2U7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldEltbWVkaWF0ZSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgdmFyIG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlkZW50aWZpZXIpO1xyXG4gICAgICAgIHZhciBvcHRpb25hbCA9IChfYSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vcHRpb25hbCkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZChub3JtYWxpemVkSWRlbnRpZmllcikgfHxcclxuICAgICAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBJbiBjYXNlIGEgY29tcG9uZW50IGlzIG5vdCBpbml0aWFsaXplZCBhbmQgc2hvdWxkL2NhbiBub3QgYmUgYXV0by1pbml0aWFsaXplZCBhdCB0aGUgbW9tZW50LCByZXR1cm4gbnVsbCBpZiB0aGUgb3B0aW9uYWwgZmxhZyBpcyBzZXQsIG9yIHRocm93XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25hbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihcIlNlcnZpY2UgXCIgKyB0aGlzLm5hbWUgKyBcIiBpcyBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5zZXRDb21wb25lbnQgPSBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJcbiAgICAgICAgdmFyIGVfMSwgX2E7XHJcbiAgICAgICAgaWYgKGNvbXBvbmVudC5uYW1lICE9PSB0aGlzLm5hbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJNaXNtYXRjaGluZyBDb21wb25lbnQgXCIgKyBjb21wb25lbnQubmFtZSArIFwiIGZvciBQcm92aWRlciBcIiArIHRoaXMubmFtZSArIFwiLlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ29tcG9uZW50IGZvciBcIiArIHRoaXMubmFtZSArIFwiIGhhcyBhbHJlYWR5IGJlZW4gcHJvdmlkZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIC8vIHJldHVybiBlYXJseSB3aXRob3V0IGF0dGVtcHRpbmcgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGlmIHRoZSBjb21wb25lbnQgcmVxdWlyZXMgZXhwbGljaXQgaW5pdGlhbGl6YXRpb24gKGNhbGxpbmcgYFByb3ZpZGVyLmluaXRpYWxpemUoKWApXHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGUgc2VydmljZSBpcyBlYWdlciwgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG4gICAgICAgIGlmIChpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllcjogREVGQVVMVF9FTlRSWV9OQU1FIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IGZvciBhbiBlYWdlciBDb21wb25lbnQgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgdGhlIGVhZ2VyXHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXphdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZSBhIGZhdGFsIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvciBpbiB0aGlzIGNhc2U/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIHNlcnZpY2UgaW5zdGFuY2VzIGZvciB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZSB0aGVtXHJcbiAgICAgICAgICAgIC8vIE5PVEU6IGlmIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgaXMgZmFsc2UsIG9ubHkgdGhlIGRlZmF1bHQgaW5zdGFuY2Ugd2lsbCBiZSBjcmVhdGVkXHJcbiAgICAgICAgICAgIC8vIGFuZCBhbGwgcHJvbWlzZXMgd2l0aCByZXNvbHZlIHdpdGggaXQgcmVnYXJkbGVzcyBvZiB0aGUgaWRlbnRpZmllci5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2IgPSBfX3ZhbHVlcyh0aGlzLmluc3RhbmNlc0RlZmVycmVkLmVudHJpZXMoKSksIF9jID0gX2IubmV4dCgpOyAhX2MuZG9uZTsgX2MgPSBfYi5uZXh0KCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChfYy52YWx1ZSwgMiksIGluc3RhbmNlSWRlbnRpZmllciA9IF9kWzBdLCBpbnN0YW5jZURlZmVycmVkID0gX2RbMV07XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBgZ2V0T3JJbml0aWFsaXplU2VydmljZSgpYCBzaG91bGQgYWx3YXlzIHJldHVybiBhIHZhbGlkIGluc3RhbmNlIHNpbmNlIGEgY29tcG9uZW50IGlzIGd1YXJhbnRlZWQuIHVzZSAhIHRvIG1ha2UgdHlwZXNjcmlwdCBoYXBweS5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCBsZWF2ZSB0aGUgcHJvbWlzZSB1bnJlc29sdmVkLlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XHJcbiAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuY2xlYXJJbnN0YW5jZSA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT09IHZvaWQgMCkgeyBpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICB9O1xyXG4gICAgLy8gYXBwLmRlbGV0ZSgpIHdpbGwgY2FsbCB0aGlzIG1ldGhvZCBvbiBldmVyeSBwcm92aWRlciB0byBkZWxldGUgdGhlIHNlcnZpY2VzXHJcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgbWFyayB0aGUgcHJvdmlkZXIgYXMgZGVsZXRlZD9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2VydmljZXM7XHJcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIFByb21pc2UuYWxsKF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgX19yZWFkKHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gJ0lOVEVSTkFMJyBpbiBzZXJ2aWNlOyB9KSAvLyBsZWdhY3kgc2VydmljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHNlcnZpY2UpIHsgcmV0dXJuIHNlcnZpY2UuSU5URVJOQUwuZGVsZXRlKCk7IH0pKSksIF9fcmVhZChzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNlcnZpY2UpIHsgcmV0dXJuICdfZGVsZXRlJyBpbiBzZXJ2aWNlOyB9KSAvLyBtb2R1bGFyaXplZCBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoc2VydmljZSkgeyByZXR1cm4gc2VydmljZS5fZGVsZXRlKCk7IH0pKSkpXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuaXNDb21wb25lbnRTZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50ICE9IG51bGw7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmlzSW5pdGlhbGl6ZWQgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5oYXMoaWRlbnRpZmllcik7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmdldE9wdGlvbnMgPSBmdW5jdGlvbiAoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyID09PSB2b2lkIDApIHsgaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRTsgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc09wdGlvbnMuZ2V0KGlkZW50aWZpZXIpIHx8IHt9O1xyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5pbml0aWFsaXplID0gZnVuY3Rpb24gKG9wdHMpIHtcclxuICAgICAgICB2YXIgZV8yLCBfYTtcclxuICAgICAgICBpZiAob3B0cyA9PT0gdm9pZCAwKSB7IG9wdHMgPSB7fTsgfVxyXG4gICAgICAgIHZhciBfYiA9IG9wdHMub3B0aW9ucywgb3B0aW9ucyA9IF9iID09PSB2b2lkIDAgPyB7fSA6IF9iO1xyXG4gICAgICAgIHZhciBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKG9wdHMuaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcih0aGlzLm5hbWUgKyBcIihcIiArIG5vcm1hbGl6ZWRJZGVudGlmaWVyICsgXCIpIGhhcyBhbHJlYWR5IGJlZW4gaW5pdGlhbGl6ZWRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiQ29tcG9uZW50IFwiICsgdGhpcy5uYW1lICsgXCIgaGFzIG5vdCBiZWVuIHJlZ2lzdGVyZWQgeWV0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyLFxyXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gcmVzb2x2ZSBhbnkgcGVuZGluZyBwcm9taXNlIHdhaXRpbmcgZm9yIHRoZSBzZXJ2aWNlIGluc3RhbmNlXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9jID0gX192YWx1ZXModGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpLCBfZCA9IF9jLm5leHQoKTsgIV9kLmRvbmU7IF9kID0gX2MubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2UgPSBfX3JlYWQoX2QudmFsdWUsIDIpLCBpbnN0YW5jZUlkZW50aWZpZXIgPSBfZVswXSwgaW5zdGFuY2VEZWZlcnJlZCA9IF9lWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRJZGVudGlmaWVyID09PSBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF9kICYmICFfZC5kb25lICYmIChfYSA9IF9jLnJldHVybikpIF9hLmNhbGwoX2MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZpbmFsbHkgeyBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7IH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayAtIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGludm9rZWQgIGFmdGVyIHRoZSBwcm92aWRlciBoYXMgYmVlbiBpbml0aWFsaXplZCBieSBjYWxsaW5nIHByb3ZpZGVyLmluaXRpYWxpemUoKS5cclxuICAgICAqIFRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIFNZTkNIUk9OT1VTTFksIHNvIGl0IHNob3VsZCBub3QgZXhlY3V0ZSBhbnkgbG9uZ3J1bm5pbmcgdGFza3MgaW4gb3JkZXIgdG8gbm90IGJsb2NrIHRoZSBwcm9ncmFtLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpZGVudGlmaWVyIEFuIG9wdGlvbmFsIGluc3RhbmNlIGlkZW50aWZpZXJcclxuICAgICAqIEByZXR1cm5zIGEgZnVuY3Rpb24gdG8gdW5yZWdpc3RlciB0aGUgY2FsbGJhY2tcclxuICAgICAqL1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLm9uSW5pdCA9IGZ1bmN0aW9uIChjYWxsYmFjaywgaWRlbnRpZmllcikge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICB2YXIgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICB2YXIgZXhpc3RpbmdDYWxsYmFja3MgPSAoX2EgPSB0aGlzLm9uSW5pdENhbGxiYWNrcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBuZXcgU2V0KCk7XHJcbiAgICAgICAgZXhpc3RpbmdDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcy5zZXQobm9ybWFsaXplZElkZW50aWZpZXIsIGV4aXN0aW5nQ2FsbGJhY2tzKTtcclxuICAgICAgICB2YXIgZXhpc3RpbmdJbnN0YW5jZSA9IHRoaXMuaW5zdGFuY2VzLmdldChub3JtYWxpemVkSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKGV4aXN0aW5nSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXhpc3RpbmdJbnN0YW5jZSwgbm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBleGlzdGluZ0NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2Ugb25Jbml0IGNhbGxiYWNrcyBzeW5jaHJvbm91c2x5XHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgdGhlIHNlcnZpY2UgaW5zdGFuY2VgXHJcbiAgICAgKi9cclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5pbnZva2VPbkluaXRDYWxsYmFja3MgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGlkZW50aWZpZXIpIHtcclxuICAgICAgICB2YXIgZV8zLCBfYTtcclxuICAgICAgICB2YXIgY2FsbGJhY2tzID0gdGhpcy5vbkluaXRDYWxsYmFja3MuZ2V0KGlkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmICghY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yICh2YXIgY2FsbGJhY2tzXzEgPSBfX3ZhbHVlcyhjYWxsYmFja3MpLCBjYWxsYmFja3NfMV8xID0gY2FsbGJhY2tzXzEubmV4dCgpOyAhY2FsbGJhY2tzXzFfMS5kb25lOyBjYWxsYmFja3NfMV8xID0gY2FsbGJhY2tzXzEubmV4dCgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NfMV8xLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhpbnN0YW5jZSwgaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoX2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluaXQgY2FsbGJhY2tcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZV8zXzEpIHsgZV8zID0geyBlcnJvcjogZV8zXzEgfTsgfVxyXG4gICAgICAgIGZpbmFsbHkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc18xXzEgJiYgIWNhbGxiYWNrc18xXzEuZG9uZSAmJiAoX2EgPSBjYWxsYmFja3NfMS5yZXR1cm4pKSBfYS5jYWxsKGNhbGxiYWNrc18xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMykgdGhyb3cgZV8zLmVycm9yOyB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRPckluaXRpYWxpemVTZXJ2aWNlID0gZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlSWRlbnRpZmllciA9IF9hLmluc3RhbmNlSWRlbnRpZmllciwgX2IgPSBfYS5vcHRpb25zLCBvcHRpb25zID0gX2IgPT09IHZvaWQgMCA/IHt9IDogX2I7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSAmJiB0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50Lmluc3RhbmNlRmFjdG9yeSh0aGlzLmNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpbnN0YW5jZUlkZW50aWZpZXIpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbnZva2Ugb25Jbml0IGxpc3RlbmVycy5cclxuICAgICAgICAgICAgICogTm90ZSB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCBpcyBkaWZmZXJlbnQsIHdoaWNoIGlzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBjcmVhdG9yLFxyXG4gICAgICAgICAgICAgKiB3aGlsZSBvbkluaXQgbGlzdGVuZXJzIGFyZSByZWdpc3RlcmVkIGJ5IGNvbnN1bWVycyBvZiB0aGUgcHJvdmlkZXIuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9yZGVyIGlzIGltcG9ydGFudFxyXG4gICAgICAgICAgICAgKiBvbkluc3RhbmNlQ3JlYXRlZCgpIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpOyB3aGljaFxyXG4gICAgICAgICAgICAgKiBtYWtlcyBgaXNJbml0aWFsaXplZCgpYCByZXR1cm4gdHJ1ZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCh0aGlzLmNvbnRhaW5lciwgaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoX2MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlIHx8IG51bGw7XHJcbiAgICB9O1xyXG4gICAgUHJvdmlkZXIucHJvdG90eXBlLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllciA9IGZ1bmN0aW9uIChpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT09IHZvaWQgMCkgeyBpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllcjsgLy8gYXNzdW1lIG11bHRpcGxlIGluc3RhbmNlcyBhcmUgc3VwcG9ydGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHByb3ZpZGVkLlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQcm92aWRlci5wcm90b3R5cGUuc2hvdWxkQXV0b0luaXRpYWxpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICghIXRoaXMuY29tcG9uZW50ICYmXHJcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbnRpYXRpb25Nb2RlICE9PSBcIkVYUExJQ0lUXCIgLyogRVhQTElDSVQgKi8pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQcm92aWRlcjtcclxufSgpKTtcclxuLy8gdW5kZWZpbmVkIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHNlcnZpY2UgZmFjdG9yeSBmb3IgdGhlIGRlZmF1bHQgaW5zdGFuY2VcclxuZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaWRlbnRpZmllcikge1xyXG4gICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IERFRkFVTFRfRU5UUllfTkFNRSA/IHVuZGVmaW5lZCA6IGlkZW50aWZpZXI7XHJcbn1cclxuZnVuY3Rpb24gaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgPT09IFwiRUFHRVJcIiAvKiBFQUdFUiAqLztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxyXG4gKi9cclxudmFyIENvbXBvbmVudENvbnRhaW5lciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbXBvbmVudENvbnRhaW5lcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnByb3ZpZGVycyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGJlaW5nIGFkZGVkXHJcbiAgICAgKiBAcGFyYW0gb3ZlcndyaXRlIFdoZW4gYSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBuYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCxcclxuICAgICAqIGlmIG92ZXJ3cml0ZSBpcyB0cnVlOiBvdmVyd3JpdGUgdGhlIGV4aXN0aW5nIGNvbXBvbmVudCB3aXRoIHRoZSBuZXcgY29tcG9uZW50IGFuZCBjcmVhdGUgYSBuZXdcclxuICAgICAqIHByb3ZpZGVyIHdpdGggdGhlIG5ldyBjb21wb25lbnQuIEl0IGNhbiBiZSB1c2VmdWwgaW4gdGVzdHMgd2hlcmUgeW91IHdhbnQgdG8gdXNlIGRpZmZlcmVudCBtb2Nrc1xyXG4gICAgICogZm9yIGRpZmZlcmVudCB0ZXN0cy5cclxuICAgICAqIGlmIG92ZXJ3cml0ZSBpcyBmYWxzZTogdGhyb3cgYW4gZXhjZXB0aW9uXHJcbiAgICAgKi9cclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvbXBvbmVudCBcIiArIGNvbXBvbmVudC5uYW1lICsgXCIgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIHdpdGggXCIgKyB0aGlzLm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm92aWRlci5zZXRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH07XHJcbiAgICBDb21wb25lbnRDb250YWluZXIucHJvdG90eXBlLmFkZE9yT3ZlcndyaXRlQ29tcG9uZW50ID0gZnVuY3Rpb24gKGNvbXBvbmVudCkge1xyXG4gICAgICAgIHZhciBwcm92aWRlciA9IHRoaXMuZ2V0UHJvdmlkZXIoY29tcG9uZW50Lm5hbWUpO1xyXG4gICAgICAgIGlmIChwcm92aWRlci5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcclxuICAgICAgICAgICAgdGhpcy5wcm92aWRlcnMuZGVsZXRlKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcclxuICAgIH07XHJcbiAgICAvKipcclxuICAgICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcclxuICAgICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cclxuICAgICAqXHJcbiAgICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcclxuICAgICAqIHRoZW1zZWx2ZXMuXHJcbiAgICAgKi9cclxuICAgIENvbXBvbmVudENvbnRhaW5lci5wcm90b3R5cGUuZ2V0UHJvdmlkZXIgPSBmdW5jdGlvbiAobmFtZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3ZpZGVycy5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvdmlkZXJzLmdldChuYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY3JlYXRlIGEgUHJvdmlkZXIgZm9yIGEgc2VydmljZSB0aGF0IGhhc24ndCByZWdpc3RlcmVkIHdpdGggRmlyZWJhc2VcclxuICAgICAgICB2YXIgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIobmFtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMuc2V0KG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9O1xyXG4gICAgQ29tcG9uZW50Q29udGFpbmVyLnByb3RvdHlwZS5nZXRQcm92aWRlcnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb21wb25lbnRDb250YWluZXI7XHJcbn0oKSk7XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50Q29udGFpbmVyLCBQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgZ2V0QXBwLCBfZ2V0UHJvdmlkZXIsIF9yZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IG9wZW5EYiB9IGZyb20gJ2lkYic7XG5cbmNvbnN0IG5hbWUgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIwLjUuMFwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBQRU5ESU5HX1RJTUVPVVRfTVMgPSAxMDAwMDtcclxuY29uc3QgUEFDS0FHRV9WRVJTSU9OID0gYHc6JHt2ZXJzaW9ufWA7XHJcbmNvbnN0IElOVEVSTkFMX0FVVEhfVkVSU0lPTiA9ICdGSVNfdjInO1xyXG5jb25zdCBJTlNUQUxMQVRJT05TX0FQSV9VUkwgPSAnaHR0cHM6Ly9maXJlYmFzZWluc3RhbGxhdGlvbnMuZ29vZ2xlYXBpcy5jb20vdjEnO1xyXG5jb25zdCBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUiA9IDYwICogNjAgKiAxMDAwOyAvLyBPbmUgaG91clxyXG5jb25zdCBTRVJWSUNFID0gJ2luc3RhbGxhdGlvbnMnO1xyXG5jb25zdCBTRVJWSUNFX05BTUUgPSAnSW5zdGFsbGF0aW9ucyc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IEVSUk9SX0RFU0NSSVBUSU9OX01BUCA9IHtcclxuICAgIFtcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovXTogJ01pc3NpbmcgQXBwIGNvbmZpZ3VyYXRpb24gdmFsdWU6IFwieyR2YWx1ZU5hbWV9XCInLFxyXG4gICAgW1wibm90LXJlZ2lzdGVyZWRcIiAvKiBOT1RfUkVHSVNURVJFRCAqL106ICdGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQuJyxcclxuICAgIFtcImluc3RhbGxhdGlvbi1ub3QtZm91bmRcIiAvKiBJTlNUQUxMQVRJT05fTk9UX0ZPVU5EICovXTogJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBub3QgZm91bmQuJyxcclxuICAgIFtcInJlcXVlc3QtZmFpbGVkXCIgLyogUkVRVUVTVF9GQUlMRUQgKi9dOiAneyRyZXF1ZXN0TmFtZX0gcmVxdWVzdCBmYWlsZWQgd2l0aCBlcnJvciBcInskc2VydmVyQ29kZX0geyRzZXJ2ZXJTdGF0dXN9OiB7JHNlcnZlck1lc3NhZ2V9XCInLFxyXG4gICAgW1wiYXBwLW9mZmxpbmVcIiAvKiBBUFBfT0ZGTElORSAqL106ICdDb3VsZCBub3QgcHJvY2VzcyByZXF1ZXN0LiBBcHBsaWNhdGlvbiBvZmZsaW5lLicsXHJcbiAgICBbXCJkZWxldGUtcGVuZGluZy1yZWdpc3RyYXRpb25cIiAvKiBERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gKi9dOiBcIkNhbid0IGRlbGV0ZSBpbnN0YWxsYXRpb24gd2hpbGUgdGhlcmUgaXMgYSBwZW5kaW5nIHJlZ2lzdHJhdGlvbiByZXF1ZXN0LlwiXHJcbn07XHJcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KFNFUlZJQ0UsIFNFUlZJQ0VfTkFNRSwgRVJST1JfREVTQ1JJUFRJT05fTUFQKTtcclxuLyoqIFJldHVybnMgdHJ1ZSBpZiBlcnJvciBpcyBhIEZpcmViYXNlRXJyb3IgdGhhdCBpcyBiYXNlZCBvbiBhbiBlcnJvciBmcm9tIHRoZSBzZXJ2ZXIuICovXHJcbmZ1bmN0aW9uIGlzU2VydmVyRXJyb3IoZXJyb3IpIHtcclxuICAgIHJldHVybiAoZXJyb3IgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yICYmXHJcbiAgICAgICAgZXJyb3IuY29kZS5pbmNsdWRlcyhcInJlcXVlc3QtZmFpbGVkXCIgLyogUkVRVUVTVF9GQUlMRUQgKi8pKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoeyBwcm9qZWN0SWQgfSkge1xyXG4gICAgcmV0dXJuIGAke0lOU1RBTExBVElPTlNfQVBJX1VSTH0vcHJvamVjdHMvJHtwcm9qZWN0SWR9L2luc3RhbGxhdGlvbnNgO1xyXG59XHJcbmZ1bmN0aW9uIGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiByZXNwb25zZS50b2tlbixcclxuICAgICAgICByZXF1ZXN0U3RhdHVzOiAyIC8qIENPTVBMRVRFRCAqLyxcclxuICAgICAgICBleHBpcmVzSW46IGdldEV4cGlyZXNJbkZyb21SZXNwb25zZUV4cGlyZXNJbihyZXNwb25zZS5leHBpcmVzSW4pLFxyXG4gICAgICAgIGNyZWF0aW9uVGltZTogRGF0ZS5ub3coKVxyXG4gICAgfTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBnZXRFcnJvckZyb21SZXNwb25zZShyZXF1ZXN0TmFtZSwgcmVzcG9uc2UpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGVycm9yRGF0YSA9IHJlc3BvbnNlSnNvbi5lcnJvcjtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInJlcXVlc3QtZmFpbGVkXCIgLyogUkVRVUVTVF9GQUlMRUQgKi8sIHtcclxuICAgICAgICByZXF1ZXN0TmFtZSxcclxuICAgICAgICBzZXJ2ZXJDb2RlOiBlcnJvckRhdGEuY29kZSxcclxuICAgICAgICBzZXJ2ZXJNZXNzYWdlOiBlcnJvckRhdGEubWVzc2FnZSxcclxuICAgICAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yRGF0YS5zdGF0dXNcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEhlYWRlcnMoeyBhcGlLZXkgfSkge1xyXG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICd4LWdvb2ctYXBpLWtleSc6IGFwaUtleVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgeyByZWZyZXNoVG9rZW4gfSkge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcclxuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pKTtcclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgcGFzc2VkIGluIGZldGNoIHdyYXBwZXIgYW5kIHJldHVybnMgdGhlIHJlc3BvbnNlLlxyXG4gKiBJZiB0aGUgcmV0dXJuZWQgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIG9mIDV4eCwgcmUtcnVucyB0aGUgZnVuY3Rpb24gb25jZSBhbmRcclxuICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZXRyeUlmU2VydmVyRXJyb3IoZm4pIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKCk7XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA+PSA1MDAgJiYgcmVzdWx0LnN0YXR1cyA8IDYwMCkge1xyXG4gICAgICAgIC8vIEludGVybmFsIFNlcnZlciBFcnJvci4gUmV0cnkgcmVxdWVzdC5cclxuICAgICAgICByZXR1cm4gZm4oKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXhwaXJlc0luRnJvbVJlc3BvbnNlRXhwaXJlc0luKHJlc3BvbnNlRXhwaXJlc0luKSB7XHJcbiAgICAvLyBUaGlzIHdvcmtzIGJlY2F1c2UgdGhlIHNlcnZlciB3aWxsIG5ldmVyIHJlc3BvbmQgd2l0aCBmcmFjdGlvbnMgb2YgYSBzZWNvbmQuXHJcbiAgICByZXR1cm4gTnVtYmVyKHJlc3BvbnNlRXhwaXJlc0luLnJlcGxhY2UoJ3MnLCAnMDAwJykpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEF1dGhvcml6YXRpb25IZWFkZXIocmVmcmVzaFRva2VuKSB7XHJcbiAgICByZXR1cm4gYCR7SU5URVJOQUxfQVVUSF9WRVJTSU9OfSAke3JlZnJlc2hUb2tlbn1gO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnLCB7IGZpZCB9KSB7XHJcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnMoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgZmlkLFxyXG4gICAgICAgIGF1dGhWZXJzaW9uOiBJTlRFUk5BTF9BVVRIX1ZFUlNJT04sXHJcbiAgICAgICAgYXBwSWQ6IGFwcENvbmZpZy5hcHBJZCxcclxuICAgICAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT05cclxuICAgIH07XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VWYWx1ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCByZWdpc3RlcmVkSW5zdGFsbGF0aW9uRW50cnkgPSB7XHJcbiAgICAgICAgICAgIGZpZDogcmVzcG9uc2VWYWx1ZS5maWQgfHwgZmlkLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDIgLyogQ09NUExFVEVEICovLFxyXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3BvbnNlVmFsdWUucmVmcmVzaFRva2VuLFxyXG4gICAgICAgICAgICBhdXRoVG9rZW46IGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlVmFsdWUuYXV0aFRva2VuKVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdDcmVhdGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIGdpdmVuIHRpbWUgcGFzc2VzLiAqL1xyXG5mdW5jdGlvbiBzbGVlcChtcykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xyXG4gICAgfSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGFycmF5KSB7XHJcbiAgICBjb25zdCBiNjQgPSBidG9hKFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYXJyYXkpKTtcclxuICAgIHJldHVybiBiNjQucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgVkFMSURfRklEX1BBVFRFUk4gPSAvXltjZGVmXVtcXHctXXsyMX0kLztcclxuY29uc3QgSU5WQUxJRF9GSUQgPSAnJztcclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIG5ldyBGSUQgdXNpbmcgcmFuZG9tIHZhbHVlcyBmcm9tIFdlYiBDcnlwdG8gQVBJLlxyXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHN0cmluZyBpZiBGSUQgZ2VuZXJhdGlvbiBmYWlscyBmb3IgYW55IHJlYXNvbi5cclxuICovXHJcbmZ1bmN0aW9uIGdlbmVyYXRlRmlkKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBBIHZhbGlkIEZJRCBoYXMgZXhhY3RseSAyMiBiYXNlNjQgY2hhcmFjdGVycywgd2hpY2ggaXMgMTMyIGJpdHMsIG9yIDE2LjVcclxuICAgICAgICAvLyBieXRlcy4gb3VyIGltcGxlbWVudGF0aW9uIGdlbmVyYXRlcyBhIDE3IGJ5dGUgYXJyYXkgaW5zdGVhZC5cclxuICAgICAgICBjb25zdCBmaWRCeXRlQXJyYXkgPSBuZXcgVWludDhBcnJheSgxNyk7XHJcbiAgICAgICAgY29uc3QgY3J5cHRvID0gc2VsZi5jcnlwdG8gfHwgc2VsZi5tc0NyeXB0bztcclxuICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGZpZEJ5dGVBcnJheSk7XHJcbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgZmlyc3QgNCByYW5kb20gYml0cyB3aXRoIHRoZSBjb25zdGFudCBGSUQgaGVhZGVyIG9mIDBiMDExMS5cclxuICAgICAgICBmaWRCeXRlQXJyYXlbMF0gPSAwYjAxMTEwMDAwICsgKGZpZEJ5dGVBcnJheVswXSAlIDBiMDAwMTAwMDApO1xyXG4gICAgICAgIGNvbnN0IGZpZCA9IGVuY29kZShmaWRCeXRlQXJyYXkpO1xyXG4gICAgICAgIHJldHVybiBWQUxJRF9GSURfUEFUVEVSTi50ZXN0KGZpZCkgPyBmaWQgOiBJTlZBTElEX0ZJRDtcclxuICAgIH1cclxuICAgIGNhdGNoIChfYSkge1xyXG4gICAgICAgIC8vIEZJRCBnZW5lcmF0aW9uIGVycm9yZWRcclxuICAgICAgICByZXR1cm4gSU5WQUxJRF9GSUQ7XHJcbiAgICB9XHJcbn1cclxuLyoqIENvbnZlcnRzIGEgRklEIFVpbnQ4QXJyYXkgdG8gYSBiYXNlNjQgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiAqL1xyXG5mdW5jdGlvbiBlbmNvZGUoZmlkQnl0ZUFycmF5KSB7XHJcbiAgICBjb25zdCBiNjRTdHJpbmcgPSBidWZmZXJUb0Jhc2U2NFVybFNhZmUoZmlkQnl0ZUFycmF5KTtcclxuICAgIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxyXG4gICAgLy8gZW5kIG9mIG91ciAxNyBieXRlIGFycmF5LCBhbmQgdGhlICc9JyBwYWRkaW5nLlxyXG4gICAgcmV0dXJuIGI2NFN0cmluZy5zdWJzdHIoMCwgMjIpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKiBSZXR1cm5zIGEgc3RyaW5nIGtleSB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoZSBhcHAuICovXHJcbmZ1bmN0aW9uIGdldEtleShhcHBDb25maWcpIHtcclxuICAgIHJldHVybiBgJHthcHBDb25maWcuYXBwTmFtZX0hJHthcHBDb25maWcuYXBwSWR9YDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBmaWRDaGFuZ2VDYWxsYmFja3MgPSBuZXcgTWFwKCk7XHJcbi8qKlxyXG4gKiBDYWxscyB0aGUgb25JZENoYW5nZSBjYWxsYmFja3Mgd2l0aCB0aGUgbmV3IEZJRCB2YWx1ZSwgYW5kIGJyb2FkY2FzdHMgdGhlXHJcbiAqIGNoYW5nZSB0byBvdGhlciB0YWJzLlxyXG4gKi9cclxuZnVuY3Rpb24gZmlkQ2hhbmdlZChhcHBDb25maWcsIGZpZCkge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKTtcclxuICAgIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCk7XHJcbn1cclxuZnVuY3Rpb24gYWRkQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjaykge1xyXG4gICAgLy8gT3BlbiB0aGUgYnJvYWRjYXN0IGNoYW5uZWwgaWYgaXQncyBub3QgYWxyZWFkeSBvcGVuLFxyXG4gICAgLy8gdG8gYmUgYWJsZSB0byBsaXN0ZW4gdG8gY2hhbmdlIGV2ZW50cyBmcm9tIG90aGVyIHRhYnMuXHJcbiAgICBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGxldCBjYWxsYmFja1NldCA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tTZXQpIHtcclxuICAgICAgICBjYWxsYmFja1NldCA9IG5ldyBTZXQoKTtcclxuICAgICAgICBmaWRDaGFuZ2VDYWxsYmFja3Muc2V0KGtleSwgY2FsbGJhY2tTZXQpO1xyXG4gICAgfVxyXG4gICAgY2FsbGJhY2tTZXQuYWRkKGNhbGxiYWNrKTtcclxufVxyXG5mdW5jdGlvbiByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xyXG4gICAgaWYgKCFjYWxsYmFja1NldCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjayk7XHJcbiAgICBpZiAoY2FsbGJhY2tTZXQuc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgIGZpZENoYW5nZUNhbGxiYWNrcy5kZWxldGUoa2V5KTtcclxuICAgIH1cclxuICAgIC8vIENsb3NlIGJyb2FkY2FzdCBjaGFubmVsIGlmIHRoZXJlIGFyZSBubyBtb3JlIGNhbGxiYWNrcy5cclxuICAgIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpO1xyXG59XHJcbmZ1bmN0aW9uIGNhbGxGaWRDaGFuZ2VDYWxsYmFja3Moa2V5LCBmaWQpIHtcclxuICAgIGNvbnN0IGNhbGxiYWNrcyA9IGZpZENoYW5nZUNhbGxiYWNrcy5nZXQoa2V5KTtcclxuICAgIGlmICghY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcclxuICAgICAgICBjYWxsYmFjayhmaWQpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJyb2FkY2FzdEZpZENoYW5nZShrZXksIGZpZCkge1xyXG4gICAgY29uc3QgY2hhbm5lbCA9IGdldEJyb2FkY2FzdENoYW5uZWwoKTtcclxuICAgIGlmIChjaGFubmVsKSB7XHJcbiAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7IGtleSwgZmlkIH0pO1xyXG4gICAgfVxyXG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XHJcbn1cclxubGV0IGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xyXG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cclxuZnVuY3Rpb24gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpIHtcclxuICAgIGlmICghYnJvYWRjYXN0Q2hhbm5lbCAmJiAnQnJvYWRjYXN0Q2hhbm5lbCcgaW4gc2VsZikge1xyXG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbC5vbm1lc3NhZ2UgPSBlID0+IHtcclxuICAgICAgICAgICAgY2FsbEZpZENoYW5nZUNhbGxiYWNrcyhlLmRhdGEua2V5LCBlLmRhdGEuZmlkKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGJyb2FkY2FzdENoYW5uZWw7XHJcbn1cclxuZnVuY3Rpb24gY2xvc2VCcm9hZGNhc3RDaGFubmVsKCkge1xyXG4gICAgaWYgKGZpZENoYW5nZUNhbGxiYWNrcy5zaXplID09PSAwICYmIGJyb2FkY2FzdENoYW5uZWwpIHtcclxuICAgICAgICBicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XHJcbiAgICAgICAgYnJvYWRjYXN0Q2hhbm5lbCA9IG51bGw7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1pbnN0YWxsYXRpb25zLWRhdGFiYXNlJztcclxuY29uc3QgREFUQUJBU0VfVkVSU0lPTiA9IDE7XHJcbmNvbnN0IE9CSkVDVF9TVE9SRV9OQU1FID0gJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtc3RvcmUnO1xyXG5sZXQgZGJQcm9taXNlID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0RGJQcm9taXNlKCkge1xyXG4gICAgaWYgKCFkYlByb21pc2UpIHtcclxuICAgICAgICBkYlByb21pc2UgPSBvcGVuRGIoREFUQUJBU0VfTkFNRSwgREFUQUJBU0VfVkVSU0lPTiwgdXBncmFkZURCID0+IHtcclxuICAgICAgICAgICAgLy8gV2UgZG9uJ3QgdXNlICdicmVhaycgaW4gdGhpcyBzd2l0Y2ggc3RhdGVtZW50LCB0aGUgZmFsbC10aHJvdWdoXHJcbiAgICAgICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxyXG4gICAgICAgICAgICAvLyB0aGUgb2xkIHZlcnNpb24gYW5kIHRoZSBjdXJyZW50IHZlcnNpb24sIHdlIHdhbnQgQUxMIHRoZSBtaWdyYXRpb25zXHJcbiAgICAgICAgICAgIC8vIHRoYXQgY29ycmVzcG9uZCB0byB0aG9zZSB2ZXJzaW9ucyB0byBydW4sIG5vdCBvbmx5IHRoZSBsYXN0IG9uZS5cclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxyXG4gICAgICAgICAgICBzd2l0Y2ggKHVwZ3JhZGVEQi5vbGRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgdXBncmFkZURCLmNyZWF0ZU9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRiUHJvbWlzZTtcclxufVxyXG4vKiogQXNzaWducyBvciBvdmVyd3JpdGVzIHRoZSByZWNvcmQgZm9yIHRoZSBnaXZlbiBrZXkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHNldChhcHBDb25maWcsIHZhbHVlKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XHJcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgIGNvbnN0IG9sZFZhbHVlID0gYXdhaXQgb2JqZWN0U3RvcmUuZ2V0KGtleSk7XHJcbiAgICBhd2FpdCBvYmplY3RTdG9yZS5wdXQodmFsdWUsIGtleSk7XHJcbiAgICBhd2FpdCB0eC5jb21wbGV0ZTtcclxuICAgIGlmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSB2YWx1ZS5maWQpIHtcclxuICAgICAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgdmFsdWUuZmlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4vKiogUmVtb3ZlcyByZWNvcmQocykgZnJvbSB0aGUgb2JqZWN0U3RvcmUgdGhhdCBtYXRjaCB0aGUgZ2l2ZW4ga2V5LiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZW1vdmUoYXBwQ29uZmlnKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XHJcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XHJcbiAgICBhd2FpdCB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSkuZGVsZXRlKGtleSk7XHJcbiAgICBhd2FpdCB0eC5jb21wbGV0ZTtcclxufVxyXG4vKipcclxuICogQXRvbWljYWxseSB1cGRhdGVzIGEgcmVjb3JkIHdpdGggdGhlIHJlc3VsdCBvZiB1cGRhdGVGbiwgd2hpY2ggZ2V0c1xyXG4gKiBjYWxsZWQgd2l0aCB0aGUgY3VycmVudCB2YWx1ZS4gSWYgbmV3VmFsdWUgaXMgdW5kZWZpbmVkLCB0aGUgcmVjb3JkIGlzXHJcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cclxuICogQHJldHVybiBVcGRhdGVkIHZhbHVlXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoYXBwQ29uZmlnLCB1cGRhdGVGbikge1xyXG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgY29uc3Qgc3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IGF3YWl0IHN0b3JlLmdldChrZXkpO1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSB1cGRhdGVGbihvbGRWYWx1ZSk7XHJcbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGF3YWl0IHN0b3JlLmRlbGV0ZShrZXkpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXdhaXQgc3RvcmUucHV0KG5ld1ZhbHVlLCBrZXkpO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgdHguY29tcGxldGU7XHJcbiAgICBpZiAobmV3VmFsdWUgJiYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5maWQgIT09IG5ld1ZhbHVlLmZpZCkpIHtcclxuICAgICAgICBmaWRDaGFuZ2VkKGFwcENvbmZpZywgbmV3VmFsdWUuZmlkKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXdWYWx1ZTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVXBkYXRlcyBhbmQgcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgZnJvbSB0aGUgZGF0YWJhc2UuXHJcbiAqIEFsc28gdHJpZ2dlcnMgYSByZWdpc3RyYXRpb24gcmVxdWVzdCBpZiBpdCBpcyBuZWNlc3NhcnkgYW5kIHBvc3NpYmxlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uRW50cnkoYXBwQ29uZmlnKSB7XHJcbiAgICBsZXQgcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbGxhdGlvbkVudHJ5ID0gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShvbGRFbnRyeSk7XHJcbiAgICAgICAgY29uc3QgZW50cnlXaXRoUHJvbWlzZSA9IHRyaWdnZXJSZWdpc3RyYXRpb25JZk5lY2Vzc2FyeShhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlID0gZW50cnlXaXRoUHJvbWlzZS5yZWdpc3RyYXRpb25Qcm9taXNlO1xyXG4gICAgICAgIHJldHVybiBlbnRyeVdpdGhQcm9taXNlLmluc3RhbGxhdGlvbkVudHJ5O1xyXG4gICAgfSk7XHJcbiAgICBpZiAoaW5zdGFsbGF0aW9uRW50cnkuZmlkID09PSBJTlZBTElEX0ZJRCkge1xyXG4gICAgICAgIC8vIEZJRCBnZW5lcmF0aW9uIGZhaWxlZC4gV2FpdGluZyBmb3IgdGhlIEZJRCBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICAgICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGF3YWl0IHJlZ2lzdHJhdGlvblByb21pc2UgfTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnksXHJcbiAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZVxyXG4gICAgfTtcclxufVxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBJbnN0YWxsYXRpb24gRW50cnkgaWYgb25lIGRvZXMgbm90IGV4aXN0LlxyXG4gKiBBbHNvIGNsZWFycyB0aW1lZCBvdXQgcGVuZGluZyByZXF1ZXN0cy5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZU9yQ3JlYXRlSW5zdGFsbGF0aW9uRW50cnkob2xkRW50cnkpIHtcclxuICAgIGNvbnN0IGVudHJ5ID0gb2xkRW50cnkgfHwge1xyXG4gICAgICAgIGZpZDogZ2VuZXJhdGVGaWQoKSxcclxuICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDAgLyogTk9UX1NUQVJURUQgKi9cclxuICAgIH07XHJcbiAgICByZXR1cm4gY2xlYXJUaW1lZE91dFJlcXVlc3QoZW50cnkpO1xyXG59XHJcbi8qKlxyXG4gKiBJZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkIHlldCwgdGhpcyB3aWxsIHRyaWdnZXIgdGhlXHJcbiAqIHJlZ2lzdHJhdGlvbiBhbmQgcmV0dXJuIGFuIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeS5cclxuICpcclxuICogSWYgcmVnaXN0cmF0aW9uUHJvbWlzZSBkb2VzIG5vdCBleGlzdCwgdGhlIGluc3RhbGxhdGlvbkVudHJ5IGlzIGd1YXJhbnRlZWRcclxuICogdG8gYmUgcmVnaXN0ZXJlZC5cclxuICovXHJcbmZ1bmN0aW9uIHRyaWdnZXJSZWdpc3RyYXRpb25JZk5lY2Vzc2FyeShhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICBpZiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIE5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiByZXF1aXJlZCBidXQgYXBwIGlzIG9mZmxpbmUuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblByb21pc2VXaXRoRXJyb3IgPSBQcm9taXNlLnJlamVjdChFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogQVBQX09GRkxJTkUgKi8pKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbkVudHJ5LFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZTogcmVnaXN0cmF0aW9uUHJvbWlzZVdpdGhFcnJvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUcnkgcmVnaXN0ZXJpbmcuIENoYW5nZSBzdGF0dXMgdG8gSU5fUFJPR1JFU1MuXHJcbiAgICAgICAgY29uc3QgaW5Qcm9ncmVzc0VudHJ5ID0ge1xyXG4gICAgICAgICAgICBmaWQ6IGluc3RhbGxhdGlvbkVudHJ5LmZpZCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAxIC8qIElOX1BST0dSRVNTICovLFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25UaW1lOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlID0gcmVnaXN0ZXJJbnN0YWxsYXRpb24oYXBwQ29uZmlnLCBpblByb2dyZXNzRW50cnkpO1xyXG4gICAgICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5OiBpblByb2dyZXNzRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBJTl9QUk9HUkVTUyAqLykge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGluc3RhbGxhdGlvbkVudHJ5LFxyXG4gICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiB3YWl0VW50aWxGaWRSZWdpc3RyYXRpb24oYXBwQ29uZmlnKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeSB9O1xyXG4gICAgfVxyXG59XHJcbi8qKiBUaGlzIHdpbGwgYmUgZXhlY3V0ZWQgb25seSBvbmNlIGZvciBlYWNoIG5ldyBGaXJlYmFzZSBJbnN0YWxsYXRpb24uICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9uKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgICAgICByZXR1cm4gc2V0KGFwcENvbmZpZywgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiYgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwOSkge1xyXG4gICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBjYW4gbm90IGJlIHVzZWRcIiBlcnJvci5cclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICBhd2FpdCByZW1vdmUoYXBwQ29uZmlnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIFJlZ2lzdHJhdGlvbiBmYWlsZWQuIFNldCBGSUQgYXMgbm90IHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIGF3YWl0IHNldChhcHBDb25maWcsIHtcclxuICAgICAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxyXG4gICAgICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAwIC8qIE5PVF9TVEFSVEVEICovXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59XHJcbi8qKiBDYWxsIGlmIEZJRCByZWdpc3RyYXRpb24gaXMgcGVuZGluZyBpbiBhbm90aGVyIHJlcXVlc3QuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHdhaXRVbnRpbEZpZFJlZ2lzdHJhdGlvbihhcHBDb25maWcpIHtcclxuICAgIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXHJcbiAgICAvLyBJbmRleGVkREIgY2hhbmdlcyAoeWV0LCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvaW5kZXhlZC1kYi1vYnNlcnZlcnMpLFxyXG4gICAgLy8gc28gd2UgbmVlZCB0byBwb2xsLlxyXG4gICAgbGV0IGVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcpO1xyXG4gICAgd2hpbGUgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBJTl9QUk9HUkVTUyAqLykge1xyXG4gICAgICAgIC8vIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IHN0aWxsIGluIHByb2dyZXNzLlxyXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XHJcbiAgICAgICAgZW50cnkgPSBhd2FpdCB1cGRhdGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIE5PVF9TVEFSVEVEICovKSB7XHJcbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXHJcbiAgICAgICAgY29uc3QgeyBpbnN0YWxsYXRpb25FbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9ID0gYXdhaXQgZ2V0SW5zdGFsbGF0aW9uRW50cnkoYXBwQ29uZmlnKTtcclxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIHJlZ2lzdHJhdGlvblByb21pc2UsIGVudHJ5IGlzIHJlZ2lzdGVyZWQuXHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YWxsYXRpb25FbnRyeTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZW50cnk7XHJcbn1cclxuLyoqXHJcbiAqIENhbGxlZCBvbmx5IGlmIHRoZXJlIGlzIGEgQ3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaW4gcHJvZ3Jlc3MuXHJcbiAqXHJcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxyXG4gKiBDcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdC5cclxuICpcclxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGlmICghb2xkRW50cnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnN0YWxsYXRpb24tbm90LWZvdW5kXCIgLyogSU5TVEFMTEFUSU9OX05PVF9GT1VORCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChvbGRFbnRyeSk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSkge1xyXG4gICAgaWYgKGhhc0luc3RhbGxhdGlvblJlcXVlc3RUaW1lZE91dChlbnRyeSkpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBmaWQ6IGVudHJ5LmZpZCxcclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAwIC8qIE5PVF9TVEFSVEVEICovXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbnRyeTtcclxufVxyXG5mdW5jdGlvbiBoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIHJldHVybiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIElOX1BST0dSRVNTICovICYmXHJcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uVGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCkpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQXV0aFRva2VuUmVxdWVzdCh7IGFwcENvbmZpZywgcGxhdGZvcm1Mb2dnZXJQcm92aWRlciB9LCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgY29uc3QgZW5kcG9pbnQgPSBnZXRHZW5lcmF0ZUF1dGhUb2tlbkVuZHBvaW50KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcclxuICAgIC8vIElmIHBsYXRmb3JtIGxvZ2dlciBleGlzdHMsIGFkZCB0aGUgcGxhdGZvcm0gaW5mbyBzdHJpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgIGNvbnN0IHBsYXRmb3JtTG9nZ2VyID0gcGxhdGZvcm1Mb2dnZXJQcm92aWRlci5nZXRJbW1lZGlhdGUoe1xyXG4gICAgICAgIG9wdGlvbmFsOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIGlmIChwbGF0Zm9ybUxvZ2dlcikge1xyXG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCd4LWZpcmViYXNlLWNsaWVudCcsIHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgaW5zdGFsbGF0aW9uOiB7XHJcbiAgICAgICAgICAgIHNka1ZlcnNpb246IFBBQ0tBR0VfVkVSU0lPTlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCByZXF1ZXN0ID0ge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9keSlcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xyXG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VWYWx1ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBjb21wbGV0ZWRBdXRoVG9rZW4gPSBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlKTtcclxuICAgICAgICByZXR1cm4gY29tcGxldGVkQXV0aFRva2VuO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgdGhyb3cgYXdhaXQgZ2V0RXJyb3JGcm9tUmVzcG9uc2UoJ0dlbmVyYXRlIEF1dGggVG9rZW4nLCByZXNwb25zZSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0R2VuZXJhdGVBdXRoVG9rZW5FbmRwb2ludChhcHBDb25maWcsIHsgZmlkIH0pIHtcclxuICAgIHJldHVybiBgJHtnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoYXBwQ29uZmlnKX0vJHtmaWR9L2F1dGhUb2tlbnM6Z2VuZXJhdGVgO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgdmFsaWQgYXV0aGVudGljYXRpb24gdG9rZW4gZm9yIHRoZSBpbnN0YWxsYXRpb24uIEdlbmVyYXRlcyBhIG5ld1xyXG4gKiB0b2tlbiBpZiBvbmUgZG9lc24ndCBleGlzdCwgaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUuXHJcbiAqXHJcbiAqIFNob3VsZCBvbmx5IGJlIGNhbGxlZCBpZiB0aGUgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIHJlZ2lzdGVyZWQuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XHJcbiAgICBsZXQgdG9rZW5Qcm9taXNlO1xyXG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcclxuICAgICAgICBpZiAoIWlzRW50cnlSZWdpc3RlcmVkKG9sZEVudHJ5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogTk9UX1JFR0lTVEVSRUQgKi8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBvbGRBdXRoVG9rZW4gPSBvbGRFbnRyeS5hdXRoVG9rZW47XHJcbiAgICAgICAgaWYgKCFmb3JjZVJlZnJlc2ggJiYgaXNBdXRoVG9rZW5WYWxpZChvbGRBdXRoVG9rZW4pKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZXJlIGlzIGEgdmFsaWQgdG9rZW4gaW4gdGhlIERCLlxyXG4gICAgICAgICAgICByZXR1cm4gb2xkRW50cnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG9sZEF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAxIC8qIElOX1BST0dSRVNTICovKSB7XHJcbiAgICAgICAgICAgIC8vIFRoZXJlIGFscmVhZHkgaXMgYSB0b2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gICAgICAgICAgICB0b2tlblByb21pc2UgPSB3YWl0VW50aWxBdXRoVG9rZW5SZXF1ZXN0KGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7XHJcbiAgICAgICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE5vIHRva2VuIG9yIHRva2VuIGV4cGlyZWQuXHJcbiAgICAgICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhcHAtb2ZmbGluZVwiIC8qIEFQUF9PRkZMSU5FICovKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBpblByb2dyZXNzRW50cnkgPSBtYWtlQXV0aFRva2VuUmVxdWVzdEluUHJvZ3Jlc3NFbnRyeShvbGRFbnRyeSk7XHJcbiAgICAgICAgICAgIHRva2VuUHJvbWlzZSA9IGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpblByb2dyZXNzRW50cnkpO1xyXG4gICAgICAgICAgICByZXR1cm4gaW5Qcm9ncmVzc0VudHJ5O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgYXV0aFRva2VuID0gdG9rZW5Qcm9taXNlXHJcbiAgICAgICAgPyBhd2FpdCB0b2tlblByb21pc2VcclxuICAgICAgICA6IGVudHJ5LmF1dGhUb2tlbjtcclxuICAgIHJldHVybiBhdXRoVG9rZW47XHJcbn1cclxuLyoqXHJcbiAqIENhbGwgb25seSBpZiBGSUQgaXMgcmVnaXN0ZXJlZCBhbmQgQXV0aCBUb2tlbiByZXF1ZXN0IGlzIGluIHByb2dyZXNzLlxyXG4gKlxyXG4gKiBXYWl0cyB1bnRpbCB0aGUgY3VycmVudCBwZW5kaW5nIHJlcXVlc3QgZmluaXNoZXMuIElmIHRoZSByZXF1ZXN0IHRpbWVzIG91dCxcclxuICogdHJpZXMgb25jZSBpbiB0aGlzIHRocmVhZCBhcyB3ZWxsLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpIHtcclxuICAgIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXHJcbiAgICAvLyBJbmRleGVkREIgY2hhbmdlcyAoeWV0LCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvaW5kZXhlZC1kYi1vYnNlcnZlcnMpLFxyXG4gICAgLy8gc28gd2UgbmVlZCB0byBwb2xsLlxyXG4gICAgbGV0IGVudHJ5ID0gYXdhaXQgdXBkYXRlQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICB3aGlsZSAoZW50cnkuYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogSU5fUFJPR1JFU1MgKi8pIHtcclxuICAgICAgICAvLyBnZW5lcmF0ZUF1dGhUb2tlbiBzdGlsbCBpbiBwcm9ncmVzcy5cclxuICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xyXG4gICAgICAgIGVudHJ5ID0gYXdhaXQgdXBkYXRlQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBlbnRyeS5hdXRoVG9rZW47XHJcbiAgICBpZiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDAgLyogTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAvLyBUaGUgcmVxdWVzdCB0aW1lZCBvdXQgb3IgZmFpbGVkIGluIGEgZGlmZmVyZW50IGNhbGwuIFRyeSBhZ2Fpbi5cclxuICAgICAgICByZXR1cm4gcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGF1dGhUb2tlbjtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQ2FsbGVkIG9ubHkgaWYgdGhlcmUgaXMgYSBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxyXG4gKlxyXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcclxuICogR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdC5cclxuICpcclxuICogUmV0dXJucyB0aGUgdXBkYXRlZCBJbnN0YWxsYXRpb25FbnRyeS5cclxuICovXHJcbmZ1bmN0aW9uIHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoYXBwQ29uZmlnKSB7XHJcbiAgICByZXR1cm4gdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm90LXJlZ2lzdGVyZWRcIiAvKiBOT1RfUkVHSVNURVJFRCAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcclxuICAgICAgICBpZiAoaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KG9sZEF1dGhUb2tlbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2xkRW50cnkpLCB7IGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiAwIC8qIE5PVF9TVEFSVEVEICovIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgIH0pO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7IGF1dGhUb2tlbiB9KTtcclxuICAgICAgICBhd2FpdCBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICAgICAgcmV0dXJuIGF1dGhUb2tlbjtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiZcclxuICAgICAgICAgICAgKGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDEgfHwgZS5jdXN0b21EYXRhLnNlcnZlckNvZGUgPT09IDQwNCkpIHtcclxuICAgICAgICAgICAgLy8gU2VydmVyIHJldHVybmVkIGEgXCJGSUQgbm90IGZvdW5kXCIgb3IgYSBcIkludmFsaWQgYXV0aGVudGljYXRpb25cIiBlcnJvci5cclxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxyXG4gICAgICAgICAgICBhd2FpdCByZW1vdmUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5ID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBpbnN0YWxsYXRpb25FbnRyeSksIHsgYXV0aFRva2VuOiB7IHJlcXVlc3RTdGF0dXM6IDAgLyogTk9UX1NUQVJURUQgKi8gfSB9KTtcclxuICAgICAgICAgICAgYXdhaXQgc2V0KGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGlzRW50cnlSZWdpc3RlcmVkKGluc3RhbGxhdGlvbkVudHJ5KSB7XHJcbiAgICByZXR1cm4gKGluc3RhbGxhdGlvbkVudHJ5ICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDIgLyogQ09NUExFVEVEICovKTtcclxufVxyXG5mdW5jdGlvbiBpc0F1dGhUb2tlblZhbGlkKGF1dGhUb2tlbikge1xyXG4gICAgcmV0dXJuIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMiAvKiBDT01QTEVURUQgKi8gJiZcclxuICAgICAgICAhaXNBdXRoVG9rZW5FeHBpcmVkKGF1dGhUb2tlbikpO1xyXG59XHJcbmZ1bmN0aW9uIGlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pIHtcclxuICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICByZXR1cm4gKG5vdyA8IGF1dGhUb2tlbi5jcmVhdGlvblRpbWUgfHxcclxuICAgICAgICBhdXRoVG9rZW4uY3JlYXRpb25UaW1lICsgYXV0aFRva2VuLmV4cGlyZXNJbiA8IG5vdyArIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSKTtcclxufVxyXG4vKiogUmV0dXJucyBhbiB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5IHdpdGggYW4gSW5Qcm9ncmVzc0F1dGhUb2tlbi4gKi9cclxuZnVuY3Rpb24gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkob2xkRW50cnkpIHtcclxuICAgIGNvbnN0IGluUHJvZ3Jlc3NBdXRoVG9rZW4gPSB7XHJcbiAgICAgICAgcmVxdWVzdFN0YXR1czogMSAvKiBJTl9QUk9HUkVTUyAqLyxcclxuICAgICAgICByZXF1ZXN0VGltZTogRGF0ZS5ub3coKVxyXG4gICAgfTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIG9sZEVudHJ5KSwgeyBhdXRoVG9rZW46IGluUHJvZ3Jlc3NBdXRoVG9rZW4gfSk7XHJcbn1cclxuZnVuY3Rpb24gaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KGF1dGhUb2tlbikge1xyXG4gICAgcmV0dXJuIChhdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBJTl9QUk9HUkVTUyAqLyAmJlxyXG4gICAgICAgIGF1dGhUb2tlbi5yZXF1ZXN0VGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCkpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlmIHRoZXJlIGlzbid0IG9uZSBmb3IgdGhlIGFwcCBhbmRcclxuICogcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uIElELlxyXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldElkKGluc3RhbGxhdGlvbnMpIHtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gaW5zdGFsbGF0aW9ucztcclxuICAgIGNvbnN0IHsgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnNJbXBsLmFwcENvbmZpZyk7XHJcbiAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2UuY2F0Y2goY29uc29sZS5lcnJvcik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBJZiB0aGUgaW5zdGFsbGF0aW9uIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgdXBkYXRlIHRoZSBhdXRoZW50aWNhdGlvblxyXG4gICAgICAgIC8vIHRva2VuIGlmIG5lZWRlZC5cclxuICAgICAgICByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnN0YWxsYXRpb25FbnRyeS5maWQ7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBGaXJlYmFzZSBJbnN0YWxsYXRpb25zIGF1dGggdG9rZW4sIGlkZW50aWZ5aW5nIHRoZSBjdXJyZW50XHJcbiAqIEZpcmViYXNlIEluc3RhbGxhdGlvbi5cclxuICogQHBhcmFtIGluc3RhbGxhdGlvbnMgLSBUaGUgYEluc3RhbGxhdGlvbnNgIGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gZm9yY2VSZWZyZXNoIC0gRm9yY2UgcmVmcmVzaCByZWdhcmRsZXNzIG9mIHRva2VuIGV4cGlyYXRpb24uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XHJcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IGluc3RhbGxhdGlvbnM7XHJcbiAgICBhd2FpdCBjb21wbGV0ZUluc3RhbGxhdGlvblJlZ2lzdHJhdGlvbihpbnN0YWxsYXRpb25zSW1wbC5hcHBDb25maWcpO1xyXG4gICAgLy8gQXQgdGhpcyBwb2ludCB3ZSBlaXRoZXIgaGF2ZSBhIFJlZ2lzdGVyZWQgSW5zdGFsbGF0aW9uIGluIHRoZSBEQiwgb3Igd2UndmVcclxuICAgIC8vIGFscmVhZHkgdGhyb3duIGFuIGVycm9yLlxyXG4gICAgY29uc3QgYXV0aFRva2VuID0gYXdhaXQgcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zSW1wbCwgZm9yY2VSZWZyZXNoKTtcclxuICAgIHJldHVybiBhdXRoVG9rZW4udG9rZW47XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gY29tcGxldGVJbnN0YWxsYXRpb25SZWdpc3RyYXRpb24oYXBwQ29uZmlnKSB7XHJcbiAgICBjb25zdCB7IHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGFwcENvbmZpZyk7XHJcbiAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xyXG4gICAgICAgIC8vIEEgY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuIFdhaXQgdW50aWwgaXQgZmluaXNoZXMuXHJcbiAgICAgICAgYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVJbnN0YWxsYXRpb25SZXF1ZXN0KGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpIHtcclxuICAgIGNvbnN0IGVuZHBvaW50ID0gZ2V0RGVsZXRlRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xyXG4gICAgY29uc3QgcmVxdWVzdCA9IHtcclxuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgIGhlYWRlcnNcclxuICAgIH07XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdEZWxldGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldERlbGV0ZUVuZHBvaW50KGFwcENvbmZpZywgeyBmaWQgfSkge1xyXG4gICAgcmV0dXJuIGAke2dldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpfS8ke2ZpZH1gO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEZWxldGVzIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gYW5kIGFsbCBhc3NvY2lhdGVkIGRhdGEuXHJcbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9ucyhpbnN0YWxsYXRpb25zKSB7XHJcbiAgICBjb25zdCB7IGFwcENvbmZpZyB9ID0gaW5zdGFsbGF0aW9ucztcclxuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xyXG4gICAgICAgIGlmIChvbGRFbnRyeSAmJiBvbGRFbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDAgLyogTk9UX1NUQVJURUQgKi8pIHtcclxuICAgICAgICAgICAgLy8gRGVsZXRlIHRoZSB1bnJlZ2lzdGVyZWQgZW50cnkgd2l0aG91dCBzZW5kaW5nIGEgZGVsZXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QuXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvbGRFbnRyeTtcclxuICAgIH0pO1xyXG4gICAgaWYgKGVudHJ5KSB7XHJcbiAgICAgICAgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBJTl9QUk9HUkVTUyAqLykge1xyXG4gICAgICAgICAgICAvLyBDYW4ndCBkZWxldGUgd2hpbGUgdHJ5aW5nIHRvIHJlZ2lzdGVyLlxyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImRlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvblwiIC8qIERFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTiAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMiAvKiBDT01QTEVURUQgKi8pIHtcclxuICAgICAgICAgICAgaWYgKCFuYXZpZ2F0b3Iub25MaW5lKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogQVBQX09GRkxJTkUgKi8pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcsIGVudHJ5KTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHJlbW92ZShhcHBDb25maWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBTZXRzIGEgbmV3IGNhbGxiYWNrIHRoYXQgd2lsbCBnZXQgY2FsbGVkIHdoZW4gSW5zdGFsbGF0aW9uIElEIGNoYW5nZXMuXHJcbiAqIFJldHVybnMgYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgY2FsbGJhY2sgd2hlbiBjYWxsZWQuXHJcbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cclxuICogQHBhcmFtIGNhbGxiYWNrIC0gVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgaXMgaW52b2tlZCB3aGVuIEZJRCBjaGFuZ2VzLlxyXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bnN1YnNjcmliZS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gb25JZENoYW5nZShpbnN0YWxsYXRpb25zLCBjYWxsYmFjaykge1xyXG4gICAgY29uc3QgeyBhcHBDb25maWcgfSA9IGluc3RhbGxhdGlvbnM7XHJcbiAgICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcmVtb3ZlQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjayk7XHJcbiAgICB9O1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHtAbGluayBJbnN0YWxsYXRpb25zfSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuXHJcbiAqIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cclxuICogQHBhcmFtIGFwcCAtIFRoZSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnMoYXBwID0gZ2V0QXBwKCkpIHtcclxuICAgIGNvbnN0IGluc3RhbGxhdGlvbnNJbXBsID0gX2dldFByb3ZpZGVyKGFwcCwgJ2luc3RhbGxhdGlvbnMnKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRyYWN0QXBwQ29uZmlnKGFwcCkge1xyXG4gICAgaWYgKCFhcHAgfHwgIWFwcC5vcHRpb25zKSB7XHJcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBDb25maWd1cmF0aW9uJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwcC5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBOYW1lJyk7XHJcbiAgICB9XHJcbiAgICAvLyBSZXF1aXJlZCBhcHAgY29uZmlnIGtleXNcclxuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSBbXHJcbiAgICAgICAgJ3Byb2plY3RJZCcsXHJcbiAgICAgICAgJ2FwaUtleScsXHJcbiAgICAgICAgJ2FwcElkJ1xyXG4gICAgXTtcclxuICAgIGZvciAoY29uc3Qga2V5TmFtZSBvZiBjb25maWdLZXlzKSB7XHJcbiAgICAgICAgaWYgKCFhcHAub3B0aW9uc1trZXlOYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcihrZXlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxyXG4gICAgICAgIHByb2plY3RJZDogYXBwLm9wdGlvbnMucHJvamVjdElkLFxyXG4gICAgICAgIGFwaUtleTogYXBwLm9wdGlvbnMuYXBpS2V5LFxyXG4gICAgICAgIGFwcElkOiBhcHAub3B0aW9ucy5hcHBJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovLCB7XHJcbiAgICAgICAgdmFsdWVOYW1lXHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBJTlNUQUxMQVRJT05TX05BTUUgPSAnaW5zdGFsbGF0aW9ucyc7XHJcbmNvbnN0IElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCA9ICdpbnN0YWxsYXRpb25zLWludGVybmFsJztcclxuY29uc3QgcHVibGljRmFjdG9yeSA9IChjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5nZXRQcm92aWRlcignYXBwJykuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICAvLyBUaHJvd3MgaWYgYXBwIGlzbid0IGNvbmZpZ3VyZWQgcHJvcGVybHkuXHJcbiAgICBjb25zdCBhcHBDb25maWcgPSBleHRyYWN0QXBwQ29uZmlnKGFwcCk7XHJcbiAgICBjb25zdCBwbGF0Zm9ybUxvZ2dlclByb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgJ3BsYXRmb3JtLWxvZ2dlcicpO1xyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSB7XHJcbiAgICAgICAgYXBwLFxyXG4gICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICBwbGF0Zm9ybUxvZ2dlclByb3ZpZGVyLFxyXG4gICAgICAgIF9kZWxldGU6ICgpID0+IFByb21pc2UucmVzb2x2ZSgpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xyXG59O1xyXG5jb25zdCBpbnRlcm5hbEZhY3RvcnkgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBjb250YWluZXIuZ2V0UHJvdmlkZXIoJ2FwcCcpLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgLy8gSW50ZXJuYWwgRklTIGluc3RhbmNlIHJlbGllcyBvbiBwdWJsaWMgRklTIGluc3RhbmNlLlxyXG4gICAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IF9nZXRQcm92aWRlcihhcHAsIElOU1RBTExBVElPTlNfTkFNRSkuZ2V0SW1tZWRpYXRlKCk7XHJcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW50ZXJuYWwgPSB7XHJcbiAgICAgICAgZ2V0SWQ6ICgpID0+IGdldElkKGluc3RhbGxhdGlvbnMpLFxyXG4gICAgICAgIGdldFRva2VuOiAoZm9yY2VSZWZyZXNoKSA9PiBnZXRUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbnRlcm5hbDtcclxufTtcclxuZnVuY3Rpb24gcmVnaXN0ZXJJbnN0YWxsYXRpb25zKCkge1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoSU5TVEFMTEFUSU9OU19OQU1FLCBwdWJsaWNGYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLykpO1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoSU5TVEFMTEFUSU9OU19OQU1FX0lOVEVSTkFMLCBpbnRlcm5hbEZhY3RvcnksIFwiUFJJVkFURVwiIC8qIFBSSVZBVEUgKi8pKTtcclxufVxuXG4vKipcclxuICogRmlyZWJhc2UgSW5zdGFsbGF0aW9uc1xyXG4gKlxyXG4gKiBAcGFja2FnZURvY3VtZW50YXRpb25cclxuICovXHJcbnJlZ2lzdGVySW5zdGFsbGF0aW9ucygpO1xyXG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbik7XG5cbmV4cG9ydCB7IGRlbGV0ZUluc3RhbGxhdGlvbnMsIGdldElkLCBnZXRJbnN0YWxsYXRpb25zLCBnZXRUb2tlbiwgb25JZENoYW5nZSB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcblxyXG5mdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBfYTtcclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcclxuICovXHJcbnZhciBpbnN0YW5jZXMgPSBbXTtcclxuLyoqXHJcbiAqIFRoZSBKUyBTREsgc3VwcG9ydHMgNSBsb2cgbGV2ZWxzIGFuZCBhbHNvIGFsbG93cyBhIHVzZXIgdGhlIGFiaWxpdHkgdG9cclxuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBUaGUgb3JkZXIgaXMgYSBmb2xsb3dzOlxyXG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCB3aWxsIGJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXHJcbiAqIGBWRVJCT1NFYCBsb2dzIHdpbGwgbm90KVxyXG4gKi9cclxudmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRFQlVHXCJdID0gMF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJTkZPXCJdID0gMl0gPSBcIklORk9cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV0FSTlwiXSA9IDNdID0gXCJXQVJOXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlNJTEVOVFwiXSA9IDVdID0gXCJTSUxFTlRcIjtcclxufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcclxudmFyIGxldmVsU3RyaW5nVG9FbnVtID0ge1xyXG4gICAgJ2RlYnVnJzogTG9nTGV2ZWwuREVCVUcsXHJcbiAgICAndmVyYm9zZSc6IExvZ0xldmVsLlZFUkJPU0UsXHJcbiAgICAnaW5mbyc6IExvZ0xldmVsLklORk8sXHJcbiAgICAnd2Fybic6IExvZ0xldmVsLldBUk4sXHJcbiAgICAnZXJyb3InOiBMb2dMZXZlbC5FUlJPUixcclxuICAgICdzaWxlbnQnOiBMb2dMZXZlbC5TSUxFTlRcclxufTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBsZXZlbFxyXG4gKi9cclxudmFyIGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxyXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXHJcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAqL1xyXG52YXIgQ29uc29sZU1ldGhvZCA9IChfYSA9IHt9LFxyXG4gICAgX2FbTG9nTGV2ZWwuREVCVUddID0gJ2xvZycsXHJcbiAgICBfYVtMb2dMZXZlbC5WRVJCT1NFXSA9ICdsb2cnLFxyXG4gICAgX2FbTG9nTGV2ZWwuSU5GT10gPSAnaW5mbycsXHJcbiAgICBfYVtMb2dMZXZlbC5XQVJOXSA9ICd3YXJuJyxcclxuICAgIF9hW0xvZ0xldmVsLkVSUk9SXSA9ICdlcnJvcicsXHJcbiAgICBfYSk7XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgaGFuZGxlciB3aWxsIGZvcndhcmQgREVCVUcsIFZFUkJPU0UsIElORk8sIFdBUk4sIGFuZCBFUlJPUlxyXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxyXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxyXG4gKi9cclxudmFyIGRlZmF1bHRMb2dIYW5kbGVyID0gZnVuY3Rpb24gKGluc3RhbmNlLCBsb2dUeXBlKSB7XHJcbiAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgfVxyXG4gICAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB2YXIgbWV0aG9kID0gQ29uc29sZU1ldGhvZFtsb2dUeXBlXTtcclxuICAgIGlmIChtZXRob2QpIHtcclxuICAgICAgICBjb25zb2xlW21ldGhvZF0uYXBwbHkoY29uc29sZSwgX19zcHJlYWRBcnJheXMoW1wiW1wiICsgbm93ICsgXCJdICBcIiArIGluc3RhbmNlLm5hbWUgKyBcIjpcIl0sIGFyZ3MpKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHRlZCB0byBsb2cgYSBtZXNzYWdlIHdpdGggYW4gaW52YWxpZCBsb2dUeXBlICh2YWx1ZTogXCIgKyBsb2dUeXBlICsgXCIpXCIpO1xyXG4gICAgfVxyXG59O1xyXG52YXIgTG9nZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cclxuICAgICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBMb2dnZXIobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGxvZyBsZXZlbCBvZiB0aGUgZ2l2ZW4gTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gZGVmYXVsdExvZ0xldmVsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYWluIChpbnRlcm5hbCkgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICogQ2FuIGJlIHNldCB0byBhIG5ldyBmdW5jdGlvbiBpbiBpbnRlcm5hbCBwYWNrYWdlIGNvZGUgYnV0IG5vdCBieSB1c2VyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSBkZWZhdWx0TG9nSGFuZGxlcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3B0aW9uYWwsIGFkZGl0aW9uYWwsIHVzZXItZGVmaW5lZCBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9nZ2VyLnByb3RvdHlwZSwgXCJsb2dMZXZlbFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sb2dMZXZlbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoISh2YWwgaW4gTG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCB2YWx1ZSBcXFwiXCIgKyB2YWwgKyBcIlxcXCIgYXNzaWduZWQgdG8gYGxvZ0xldmVsYFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IHZhbDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICAvLyBXb3JrYXJvdW5kIGZvciBzZXR0ZXIvZ2V0dGVyIGhhdmluZyB0byBiZSB0aGUgc2FtZSB0eXBlLlxyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gbGV2ZWxTdHJpbmdUb0VudW1bdmFsXSA6IHZhbDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTG9nZ2VyLnByb3RvdHlwZSwgXCJsb2dIYW5kbGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0hhbmRsZXI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGFzc2lnbmVkIHRvIGBsb2dIYW5kbGVyYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9sb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMb2dnZXIucHJvdG90eXBlLCBcInVzZXJMb2dIYW5kbGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGZ1bmN0aW9ucyBiZWxvdyBhcmUgYWxsIGJhc2VkIG9uIHRoZSBgY29uc29sZWAgaW50ZXJmYWNlXHJcbiAgICAgKi9cclxuICAgIExvZ2dlci5wcm90b3R5cGUuZGVidWcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5ERUJVR10sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5ERUJVR10sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLlZFUkJPU0VdLCBhcmdzKSk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuVkVSQk9TRV0sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICBMb2dnZXIucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5JTkZPXSwgYXJncykpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIuYXBwbHkodGhpcywgX19zcHJlYWRBcnJheXMoW3RoaXMsIExvZ0xldmVsLklORk9dLCBhcmdzKSk7XHJcbiAgICB9O1xyXG4gICAgTG9nZ2VyLnByb3RvdHlwZS53YXJuID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlci5hcHBseSh0aGlzLCBfX3NwcmVhZEFycmF5cyhbdGhpcywgTG9nTGV2ZWwuV0FSTl0sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5XQVJOXSwgYXJncykpO1xyXG4gICAgfTtcclxuICAgIExvZ2dlci5wcm90b3R5cGUuZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5FUlJPUl0sIGFyZ3MpKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyLmFwcGx5KHRoaXMsIF9fc3ByZWFkQXJyYXlzKFt0aGlzLCBMb2dMZXZlbC5FUlJPUl0sIGFyZ3MpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTG9nZ2VyO1xyXG59KCkpO1xyXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24gKGluc3QpIHtcclxuICAgICAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xyXG4gICAgICAgIHZhciBjdXN0b21Mb2dMZXZlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xyXG4gICAgICAgICAgICBjdXN0b21Mb2dMZXZlbCA9IGxldmVsU3RyaW5nVG9FbnVtW29wdGlvbnMubGV2ZWxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIGxldmVsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcmdzW19pIC0gMl0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSBhcmdzXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoYXJnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGlnbm9yZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChhcmcpIHsgcmV0dXJuIGFyZzsgfSlcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCAhPT0gbnVsbCAmJiBjdXN0b21Mb2dMZXZlbCAhPT0gdm9pZCAwID8gY3VzdG9tTG9nTGV2ZWwgOiBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnczogYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGluc3RhbmNlc18xID0gaW5zdGFuY2VzOyBfaSA8IGluc3RhbmNlc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGluc3RhbmNlc18xW19pXTtcclxuICAgICAgICBfbG9vcF8xKGluc3RhbmNlKTtcclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nZ2VyLCBzZXRMb2dMZXZlbCwgc2V0VXNlckxvZ0hhbmRsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCAnQGZpcmViYXNlL2luc3RhbGxhdGlvbnMnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBvcGVuRGIsIGRlbGV0ZURiIH0gZnJvbSAnaWRiJztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgZ2V0TW9kdWxhckluc3RhbmNlIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgX3JlZ2lzdGVyQ29tcG9uZW50LCBnZXRBcHAsIF9nZXRQcm92aWRlciB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX1ZBUElEX0tFWSA9ICdCRE9VOTktaDY3SGNBNkplRlhIYlNOTXU3ZTJ5Tk51M1J6b01qOFRNNFc4OGpJVGZxN1ptUHZJTTFJdi00X2wyTHhRY1l3aHFieTJ4R3BXd3pqZkFuRzQnO1xyXG5jb25zdCBFTkRQT0lOVCA9ICdodHRwczovL2ZjbXJlZ2lzdHJhdGlvbnMuZ29vZ2xlYXBpcy5jb20vdjEnO1xyXG4vKiogS2V5IG9mIEZDTSBQYXlsb2FkIGluIE5vdGlmaWNhdGlvbidzIGRhdGEgZmllbGQuICovXHJcbmNvbnN0IEZDTV9NU0cgPSAnRkNNX01TRyc7XHJcbmNvbnN0IENPTlNPTEVfQ0FNUEFJR05fSUQgPSAnZ29vZ2xlLmMuYS5jX2lkJztcclxuLy8gRGVmaW5lZCBhcyBpbiBwcm90by9tZXNzYWdpbmdfZXZlbnQucHJvdG8uIE5lZ2xlY3RpbmcgZmllbGRzIHRoYXQgYXJlIHN1cHBvcnRlZC5cclxuY29uc3QgU0RLX1BMQVRGT1JNX1dFQiA9IDM7XHJcbmNvbnN0IEVWRU5UX01FU1NBR0VfREVMSVZFUkVEID0gMTtcclxudmFyIE1lc3NhZ2VUeXBlJDE7XHJcbihmdW5jdGlvbiAoTWVzc2FnZVR5cGUpIHtcclxuICAgIE1lc3NhZ2VUeXBlW01lc3NhZ2VUeXBlW1wiREFUQV9NRVNTQUdFXCJdID0gMV0gPSBcIkRBVEFfTUVTU0FHRVwiO1xyXG4gICAgTWVzc2FnZVR5cGVbTWVzc2FnZVR5cGVbXCJESVNQTEFZX05PVElGSUNBVElPTlwiXSA9IDNdID0gXCJESVNQTEFZX05PVElGSUNBVElPTlwiO1xyXG59KShNZXNzYWdlVHlwZSQxIHx8IChNZXNzYWdlVHlwZSQxID0ge30pKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHRcclxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2VcclxuICogaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3NcclxuICogb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlclxyXG4gKiB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBNZXNzYWdlVHlwZTtcclxuKGZ1bmN0aW9uIChNZXNzYWdlVHlwZSkge1xyXG4gICAgTWVzc2FnZVR5cGVbXCJQVVNIX1JFQ0VJVkVEXCJdID0gXCJwdXNoLXJlY2VpdmVkXCI7XHJcbiAgICBNZXNzYWdlVHlwZVtcIk5PVElGSUNBVElPTl9DTElDS0VEXCJdID0gXCJub3RpZmljYXRpb24tY2xpY2tlZFwiO1xyXG59KShNZXNzYWdlVHlwZSB8fCAoTWVzc2FnZVR5cGUgPSB7fSkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBhcnJheVRvQmFzZTY0KGFycmF5KSB7XHJcbiAgICBjb25zdCB1aW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXkpO1xyXG4gICAgY29uc3QgYmFzZTY0U3RyaW5nID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLnVpbnQ4QXJyYXkpKTtcclxuICAgIHJldHVybiBiYXNlNjRTdHJpbmcucmVwbGFjZSgvPS9nLCAnJykucmVwbGFjZSgvXFwrL2csICctJykucmVwbGFjZSgvXFwvL2csICdfJyk7XHJcbn1cclxuZnVuY3Rpb24gYmFzZTY0VG9BcnJheShiYXNlNjRTdHJpbmcpIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAnPScucmVwZWF0KCg0IC0gKGJhc2U2NFN0cmluZy5sZW5ndGggJSA0KSkgJSA0KTtcclxuICAgIGNvbnN0IGJhc2U2NCA9IChiYXNlNjRTdHJpbmcgKyBwYWRkaW5nKVxyXG4gICAgICAgIC5yZXBsYWNlKC9cXC0vZywgJysnKVxyXG4gICAgICAgIC5yZXBsYWNlKC9fL2csICcvJyk7XHJcbiAgICBjb25zdCByYXdEYXRhID0gYXRvYihiYXNlNjQpO1xyXG4gICAgY29uc3Qgb3V0cHV0QXJyYXkgPSBuZXcgVWludDhBcnJheShyYXdEYXRhLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhd0RhdGEubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBvdXRwdXRBcnJheVtpXSA9IHJhd0RhdGEuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXRBcnJheTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBPTERfREJfTkFNRSA9ICdmY21fdG9rZW5fZGV0YWlsc19kYic7XHJcbi8qKlxyXG4gKiBUaGUgbGFzdCBEQiB2ZXJzaW9uIG9mICdmY21fdG9rZW5fZGV0YWlsc19kYicgd2FzIDQuIFRoaXMgaXMgb25lIGhpZ2hlciwgc28gdGhhdCB0aGUgdXBncmFkZVxyXG4gKiBjYWxsYmFjayBpcyBjYWxsZWQgZm9yIGFsbCB2ZXJzaW9ucyBvZiB0aGUgb2xkIERCLlxyXG4gKi9cclxuY29uc3QgT0xEX0RCX1ZFUlNJT04gPSA1O1xyXG5jb25zdCBPTERfT0JKRUNUX1NUT1JFX05BTUUgPSAnZmNtX3Rva2VuX29iamVjdF9TdG9yZSc7XHJcbmFzeW5jIGZ1bmN0aW9uIG1pZ3JhdGVPbGREYXRhYmFzZShzZW5kZXJJZCkge1xyXG4gICAgaWYgKCdkYXRhYmFzZXMnIGluIGluZGV4ZWREQikge1xyXG4gICAgICAgIC8vIGluZGV4ZWREYi5kYXRhYmFzZXMoKSBpcyBhbiBJbmRleGVkREIgdjMgQVBJIGFuZCBkb2VzIG5vdCBleGlzdCBpbiBhbGwgYnJvd3NlcnMuIFRPRE86IFJlbW92ZVxyXG4gICAgICAgIC8vIHR5cGVjYXN0IHdoZW4gaXQgbGFuZHMgaW4gVFMgdHlwZXMuXHJcbiAgICAgICAgY29uc3QgZGF0YWJhc2VzID0gYXdhaXQgaW5kZXhlZERCLmRhdGFiYXNlcygpO1xyXG4gICAgICAgIGNvbnN0IGRiTmFtZXMgPSBkYXRhYmFzZXMubWFwKGRiID0+IGRiLm5hbWUpO1xyXG4gICAgICAgIGlmICghZGJOYW1lcy5pbmNsdWRlcyhPTERfREJfTkFNRSkpIHtcclxuICAgICAgICAgICAgLy8gb2xkIERCIGRpZG4ndCBleGlzdCwgbm8gbmVlZCB0byBvcGVuLlxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgdG9rZW5EZXRhaWxzID0gbnVsbDtcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgb3BlbkRiKE9MRF9EQl9OQU1FLCBPTERfREJfVkVSU0lPTiwgYXN5bmMgKGRiKSA9PiB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmIChkYi5vbGRWZXJzaW9uIDwgMikge1xyXG4gICAgICAgICAgICAvLyBEYXRhYmFzZSB0b28gb2xkLCBza2lwIG1pZ3JhdGlvbi5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWRiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoT0xEX09CSkVDVF9TVE9SRV9OQU1FKSkge1xyXG4gICAgICAgICAgICAvLyBEYXRhYmFzZSBkaWQgbm90IGV4aXN0LiBOb3RoaW5nIHRvIGRvLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gZGIudHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoT0xEX09CSkVDVF9TVE9SRV9OQU1FKTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGF3YWl0IG9iamVjdFN0b3JlLmluZGV4KCdmY21TZW5kZXJJZCcpLmdldChzZW5kZXJJZCk7XHJcbiAgICAgICAgYXdhaXQgb2JqZWN0U3RvcmUuY2xlYXIoKTtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIE5vIGVudHJ5IGluIHRoZSBkYXRhYmFzZSwgbm90aGluZyB0byBtaWdyYXRlLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYi5vbGRWZXJzaW9uID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZERldGFpbHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKCFvbGREZXRhaWxzLmF1dGggfHwgIW9sZERldGFpbHMucDI1NmRoIHx8ICFvbGREZXRhaWxzLmVuZHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IG9sZERldGFpbHMuZmNtVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiAoX2EgPSBvbGREZXRhaWxzLmNyZWF0ZVRpbWUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogb2xkRGV0YWlscy5hdXRoLFxyXG4gICAgICAgICAgICAgICAgICAgIHAyNTZkaDogb2xkRGV0YWlscy5wMjU2ZGgsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IG9sZERldGFpbHMuZW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3dTY29wZTogb2xkRGV0YWlscy5zd1Njb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcGlkS2V5OiB0eXBlb2Ygb2xkRGV0YWlscy52YXBpZEtleSA9PT0gJ3N0cmluZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBvbGREZXRhaWxzLnZhcGlkS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLnZhcGlkS2V5KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkYi5vbGRWZXJzaW9uID09PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG9sZERldGFpbHMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgdG9rZW5EZXRhaWxzID0ge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IG9sZERldGFpbHMuZmNtVG9rZW4sXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUaW1lOiBvbGREZXRhaWxzLmNyZWF0ZVRpbWUsXHJcbiAgICAgICAgICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0aDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLmF1dGgpLFxyXG4gICAgICAgICAgICAgICAgICAgIHAyNTZkaDogYXJyYXlUb0Jhc2U2NChvbGREZXRhaWxzLnAyNTZkaCksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IG9sZERldGFpbHMuZW5kcG9pbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3dTY29wZTogb2xkRGV0YWlscy5zd1Njb3BlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcGlkS2V5OiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMudmFwaWRLZXkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRiLm9sZFZlcnNpb24gPT09IDQpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2xkRGV0YWlscyA9IHZhbHVlO1xyXG4gICAgICAgICAgICB0b2tlbkRldGFpbHMgPSB7XHJcbiAgICAgICAgICAgICAgICB0b2tlbjogb2xkRGV0YWlscy5mY21Ub2tlbixcclxuICAgICAgICAgICAgICAgIGNyZWF0ZVRpbWU6IG9sZERldGFpbHMuY3JlYXRlVGltZSxcclxuICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRoOiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMuYXV0aCksXHJcbiAgICAgICAgICAgICAgICAgICAgcDI1NmRoOiBhcnJheVRvQmFzZTY0KG9sZERldGFpbHMucDI1NmRoKSxcclxuICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogb2xkRGV0YWlscy5lbmRwb2ludCxcclxuICAgICAgICAgICAgICAgICAgICBzd1Njb3BlOiBvbGREZXRhaWxzLnN3U2NvcGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFwaWRLZXk6IGFycmF5VG9CYXNlNjQob2xkRGV0YWlscy52YXBpZEtleSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRiLmNsb3NlKCk7XHJcbiAgICAvLyBEZWxldGUgYWxsIG9sZCBkYXRhYmFzZXMuXHJcbiAgICBhd2FpdCBkZWxldGVEYihPTERfREJfTkFNRSk7XHJcbiAgICBhd2FpdCBkZWxldGVEYignZmNtX3ZhcGlkX2RldGFpbHNfZGInKTtcclxuICAgIGF3YWl0IGRlbGV0ZURiKCd1bmRlZmluZWQnKTtcclxuICAgIHJldHVybiBjaGVja1Rva2VuRGV0YWlscyh0b2tlbkRldGFpbHMpID8gdG9rZW5EZXRhaWxzIDogbnVsbDtcclxufVxyXG5mdW5jdGlvbiBjaGVja1Rva2VuRGV0YWlscyh0b2tlbkRldGFpbHMpIHtcclxuICAgIGlmICghdG9rZW5EZXRhaWxzIHx8ICF0b2tlbkRldGFpbHMuc3Vic2NyaXB0aW9uT3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uT3B0aW9ucyB9ID0gdG9rZW5EZXRhaWxzO1xyXG4gICAgcmV0dXJuICh0eXBlb2YgdG9rZW5EZXRhaWxzLmNyZWF0ZVRpbWUgPT09ICdudW1iZXInICYmXHJcbiAgICAgICAgdG9rZW5EZXRhaWxzLmNyZWF0ZVRpbWUgPiAwICYmXHJcbiAgICAgICAgdHlwZW9mIHRva2VuRGV0YWlscy50b2tlbiA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICB0b2tlbkRldGFpbHMudG9rZW4ubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBzdWJzY3JpcHRpb25PcHRpb25zLmF1dGggPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9ucy5hdXRoLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICB0eXBlb2Ygc3Vic2NyaXB0aW9uT3B0aW9ucy5wMjU2ZGggPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9ucy5wMjU2ZGgubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBzdWJzY3JpcHRpb25PcHRpb25zLmVuZHBvaW50ID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnMuZW5kcG9pbnQubGVuZ3RoID4gMCAmJlxyXG4gICAgICAgIHR5cGVvZiBzdWJzY3JpcHRpb25PcHRpb25zLnN3U2NvcGUgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgc3Vic2NyaXB0aW9uT3B0aW9ucy5zd1Njb3BlLmxlbmd0aCA+IDAgJiZcclxuICAgICAgICB0eXBlb2Ygc3Vic2NyaXB0aW9uT3B0aW9ucy52YXBpZEtleSA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICBzdWJzY3JpcHRpb25PcHRpb25zLnZhcGlkS2V5Lmxlbmd0aCA+IDApO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8vIEV4cG9ydGVkIGZvciB0ZXN0cy5cclxuY29uc3QgREFUQUJBU0VfTkFNRSA9ICdmaXJlYmFzZS1tZXNzYWdpbmctZGF0YWJhc2UnO1xyXG5jb25zdCBEQVRBQkFTRV9WRVJTSU9OID0gMTtcclxuY29uc3QgT0JKRUNUX1NUT1JFX05BTUUgPSAnZmlyZWJhc2UtbWVzc2FnaW5nLXN0b3JlJztcclxubGV0IGRiUHJvbWlzZSA9IG51bGw7XHJcbmZ1bmN0aW9uIGdldERiUHJvbWlzZSgpIHtcclxuICAgIGlmICghZGJQcm9taXNlKSB7XHJcbiAgICAgICAgZGJQcm9taXNlID0gb3BlbkRiKERBVEFCQVNFX05BTUUsIERBVEFCQVNFX1ZFUlNJT04sIHVwZ3JhZGVEYiA9PiB7XHJcbiAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaCBiZWhhdmlvciBpcyB3aGF0IHdlIHdhbnQsXHJcbiAgICAgICAgICAgIC8vIGJlY2F1c2UgaWYgdGhlcmUgYXJlIG11bHRpcGxlIHZlcnNpb25zIGJldHdlZW4gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZVxyXG4gICAgICAgICAgICAvLyB3YW50IEFMTCB0aGUgbWlncmF0aW9ucyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXHJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcclxuICAgICAgICAgICAgc3dpdGNoICh1cGdyYWRlRGIub2xkVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVEYi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYlByb21pc2U7XHJcbn1cclxuLyoqIEdldHMgcmVjb3JkKHMpIGZyb20gdGhlIG9iamVjdFN0b3JlIHRoYXQgbWF0Y2ggdGhlIGdpdmVuIGtleS4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZGJHZXQoZmlyZWJhc2VEZXBlbmRlbmNpZXMpIHtcclxuICAgIGNvbnN0IGtleSA9IGdldEtleShmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgY29uc3QgdG9rZW5EZXRhaWxzID0gYXdhaXQgZGJcclxuICAgICAgICAudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUpXHJcbiAgICAgICAgLm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKVxyXG4gICAgICAgIC5nZXQoa2V5KTtcclxuICAgIGlmICh0b2tlbkRldGFpbHMpIHtcclxuICAgICAgICByZXR1cm4gdG9rZW5EZXRhaWxzO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlcmUgaXMgYSB0b2tlbkRldGFpbHMgb2JqZWN0IGluIHRoZSBvbGQgREIuXHJcbiAgICAgICAgY29uc3Qgb2xkVG9rZW5EZXRhaWxzID0gYXdhaXQgbWlncmF0ZU9sZERhdGFiYXNlKGZpcmViYXNlRGVwZW5kZW5jaWVzLmFwcENvbmZpZy5zZW5kZXJJZCk7XHJcbiAgICAgICAgaWYgKG9sZFRva2VuRGV0YWlscykge1xyXG4gICAgICAgICAgICBhd2FpdCBkYlNldChmaXJlYmFzZURlcGVuZGVuY2llcywgb2xkVG9rZW5EZXRhaWxzKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9sZFRva2VuRGV0YWlscztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqIEFzc2lnbnMgb3Igb3ZlcndyaXRlcyB0aGUgcmVjb3JkIGZvciB0aGUgZ2l2ZW4ga2V5IHdpdGggdGhlIGdpdmVuIHZhbHVlLiAqL1xyXG5hc3luYyBmdW5jdGlvbiBkYlNldChmaXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW5EZXRhaWxzKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcclxuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcclxuICAgIGF3YWl0IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5wdXQodG9rZW5EZXRhaWxzLCBrZXkpO1xyXG4gICAgYXdhaXQgdHguY29tcGxldGU7XHJcbiAgICByZXR1cm4gdG9rZW5EZXRhaWxzO1xyXG59XHJcbi8qKiBSZW1vdmVzIHJlY29yZChzKSBmcm9tIHRoZSBvYmplY3RTdG9yZSB0aGF0IG1hdGNoIHRoZSBnaXZlbiBrZXkuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRiUmVtb3ZlKGZpcmViYXNlRGVwZW5kZW5jaWVzKSB7XHJcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcclxuICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oT0JKRUNUX1NUT1JFX05BTUUsICdyZWFkd3JpdGUnKTtcclxuICAgIGF3YWl0IHR4Lm9iamVjdFN0b3JlKE9CSkVDVF9TVE9SRV9OQU1FKS5kZWxldGUoa2V5KTtcclxuICAgIGF3YWl0IHR4LmNvbXBsZXRlO1xyXG59XHJcbmZ1bmN0aW9uIGdldEtleSh7IGFwcENvbmZpZyB9KSB7XHJcbiAgICByZXR1cm4gYXBwQ29uZmlnLmFwcElkO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IEVSUk9SX01BUCA9IHtcclxuICAgIFtcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovXTogJ01pc3NpbmcgQXBwIGNvbmZpZ3VyYXRpb24gdmFsdWU6IFwieyR2YWx1ZU5hbWV9XCInLFxyXG4gICAgW1wib25seS1hdmFpbGFibGUtaW4td2luZG93XCIgLyogQVZBSUxBQkxFX0lOX1dJTkRPVyAqL106ICdUaGlzIG1ldGhvZCBpcyBhdmFpbGFibGUgaW4gYSBXaW5kb3cgY29udGV4dC4nLFxyXG4gICAgW1wib25seS1hdmFpbGFibGUtaW4tc3dcIiAvKiBBVkFJTEFCTEVfSU5fU1cgKi9dOiAnVGhpcyBtZXRob2QgaXMgYXZhaWxhYmxlIGluIGEgc2VydmljZSB3b3JrZXIgY29udGV4dC4nLFxyXG4gICAgW1wicGVybWlzc2lvbi1kZWZhdWx0XCIgLyogUEVSTUlTU0lPTl9ERUZBVUxUICovXTogJ1RoZSBub3RpZmljYXRpb24gcGVybWlzc2lvbiB3YXMgbm90IGdyYW50ZWQgYW5kIGRpc21pc3NlZCBpbnN0ZWFkLicsXHJcbiAgICBbXCJwZXJtaXNzaW9uLWJsb2NrZWRcIiAvKiBQRVJNSVNTSU9OX0JMT0NLRUQgKi9dOiAnVGhlIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIHdhcyBub3QgZ3JhbnRlZCBhbmQgYmxvY2tlZCBpbnN0ZWFkLicsXHJcbiAgICBbXCJ1bnN1cHBvcnRlZC1icm93c2VyXCIgLyogVU5TVVBQT1JURURfQlJPV1NFUiAqL106IFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCB0aGUgQVBJJ3MgcmVxdWlyZWQgdG8gdXNlIHRoZSBmaXJlYmFzZSBTREsuXCIsXHJcbiAgICBbXCJpbmRleGVkLWRiLXVuc3VwcG9ydGVkXCIgLyogSU5ERVhFRF9EQl9VTlNVUFBPUlRFRCAqL106IFwiVGhpcyBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpbmRleGVkRGIub3BlbigpIChleC4gU2FmYXJpIGlGcmFtZSwgRmlyZWZveCBQcml2YXRlIEJyb3dzaW5nLCBldGMpXCIsXHJcbiAgICBbXCJmYWlsZWQtc2VydmljZS13b3JrZXItcmVnaXN0cmF0aW9uXCIgLyogRkFJTEVEX0RFRkFVTFRfUkVHSVNUUkFUSU9OICovXTogJ1dlIGFyZSB1bmFibGUgdG8gcmVnaXN0ZXIgdGhlIGRlZmF1bHQgc2VydmljZSB3b3JrZXIuIHskYnJvd3NlckVycm9yTWVzc2FnZX0nLFxyXG4gICAgW1widG9rZW4tc3Vic2NyaWJlLWZhaWxlZFwiIC8qIFRPS0VOX1NVQlNDUklCRV9GQUlMRUQgKi9dOiAnQSBwcm9ibGVtIG9jY3VycmVkIHdoaWxlIHN1YnNjcmliaW5nIHRoZSB1c2VyIHRvIEZDTTogeyRlcnJvckluZm99JyxcclxuICAgIFtcInRva2VuLXN1YnNjcmliZS1uby10b2tlblwiIC8qIFRPS0VOX1NVQlNDUklCRV9OT19UT0tFTiAqL106ICdGQ00gcmV0dXJuZWQgbm8gdG9rZW4gd2hlbiBzdWJzY3JpYmluZyB0aGUgdXNlciB0byBwdXNoLicsXHJcbiAgICBbXCJ0b2tlbi11bnN1YnNjcmliZS1mYWlsZWRcIiAvKiBUT0tFTl9VTlNVQlNDUklCRV9GQUlMRUQgKi9dOiAnQSBwcm9ibGVtIG9jY3VycmVkIHdoaWxlIHVuc3Vic2NyaWJpbmcgdGhlICcgK1xyXG4gICAgICAgICd1c2VyIGZyb20gRkNNOiB7JGVycm9ySW5mb30nLFxyXG4gICAgW1widG9rZW4tdXBkYXRlLWZhaWxlZFwiIC8qIFRPS0VOX1VQREFURV9GQUlMRUQgKi9dOiAnQSBwcm9ibGVtIG9jY3VycmVkIHdoaWxlIHVwZGF0aW5nIHRoZSB1c2VyIGZyb20gRkNNOiB7JGVycm9ySW5mb30nLFxyXG4gICAgW1widG9rZW4tdXBkYXRlLW5vLXRva2VuXCIgLyogVE9LRU5fVVBEQVRFX05PX1RPS0VOICovXTogJ0ZDTSByZXR1cm5lZCBubyB0b2tlbiB3aGVuIHVwZGF0aW5nIHRoZSB1c2VyIHRvIHB1c2guJyxcclxuICAgIFtcInVzZS1zdy1hZnRlci1nZXQtdG9rZW5cIiAvKiBVU0VfU1dfQUZURVJfR0VUX1RPS0VOICovXTogJ1RoZSB1c2VTZXJ2aWNlV29ya2VyKCkgbWV0aG9kIG1heSBvbmx5IGJlIGNhbGxlZCBvbmNlIGFuZCBtdXN0IGJlICcgK1xyXG4gICAgICAgICdjYWxsZWQgYmVmb3JlIGNhbGxpbmcgZ2V0VG9rZW4oKSB0byBlbnN1cmUgeW91ciBzZXJ2aWNlIHdvcmtlciBpcyB1c2VkLicsXHJcbiAgICBbXCJpbnZhbGlkLXN3LXJlZ2lzdHJhdGlvblwiIC8qIElOVkFMSURfU1dfUkVHSVNUUkFUSU9OICovXTogJ1RoZSBpbnB1dCB0byB1c2VTZXJ2aWNlV29ya2VyKCkgbXVzdCBiZSBhIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24uJyxcclxuICAgIFtcImludmFsaWQtYmctaGFuZGxlclwiIC8qIElOVkFMSURfQkdfSEFORExFUiAqL106ICdUaGUgaW5wdXQgdG8gc2V0QmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyKCkgbXVzdCBiZSBhIGZ1bmN0aW9uLicsXHJcbiAgICBbXCJpbnZhbGlkLXZhcGlkLWtleVwiIC8qIElOVkFMSURfVkFQSURfS0VZICovXTogJ1RoZSBwdWJsaWMgVkFQSUQga2V5IG11c3QgYmUgYSBzdHJpbmcuJyxcclxuICAgIFtcInVzZS12YXBpZC1rZXktYWZ0ZXItZ2V0LXRva2VuXCIgLyogVVNFX1ZBUElEX0tFWV9BRlRFUl9HRVRfVE9LRU4gKi9dOiAnVGhlIHVzZVB1YmxpY1ZhcGlkS2V5KCkgbWV0aG9kIG1heSBvbmx5IGJlIGNhbGxlZCBvbmNlIGFuZCBtdXN0IGJlICcgK1xyXG4gICAgICAgICdjYWxsZWQgYmVmb3JlIGNhbGxpbmcgZ2V0VG9rZW4oKSB0byBlbnN1cmUgeW91ciBWQVBJRCBrZXkgaXMgdXNlZC4nXHJcbn07XHJcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KCdtZXNzYWdpbmcnLCAnTWVzc2FnaW5nJywgRVJST1JfTUFQKTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEdldFRva2VuKGZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCBib2R5ID0gZ2V0Qm9keShzdWJzY3JpcHRpb25PcHRpb25zKTtcclxuICAgIGNvbnN0IHN1YnNjcmliZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfTtcclxuICAgIGxldCByZXNwb25zZURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2V0RW5kcG9pbnQoZmlyZWJhc2VEZXBlbmRlbmNpZXMuYXBwQ29uZmlnKSwgc3Vic2NyaWJlT3B0aW9ucyk7XHJcbiAgICAgICAgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tc3Vic2NyaWJlLWZhaWxlZFwiIC8qIFRPS0VOX1NVQlNDUklCRV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgZXJyb3JJbmZvOiBlcnJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZURhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzcG9uc2VEYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi1zdWJzY3JpYmUtZmFpbGVkXCIgLyogVE9LRU5fU1VCU0NSSUJFX0ZBSUxFRCAqLywge1xyXG4gICAgICAgICAgICBlcnJvckluZm86IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghcmVzcG9uc2VEYXRhLnRva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi1zdWJzY3JpYmUtbm8tdG9rZW5cIiAvKiBUT0tFTl9TVUJTQ1JJQkVfTk9fVE9LRU4gKi8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YS50b2tlbjtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0VXBkYXRlVG9rZW4oZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscykge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IGF3YWl0IGdldEhlYWRlcnMoZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgY29uc3QgYm9keSA9IGdldEJvZHkodG9rZW5EZXRhaWxzLnN1YnNjcmlwdGlvbk9wdGlvbnMpO1xyXG4gICAgY29uc3QgdXBkYXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgaGVhZGVycyxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxyXG4gICAgfTtcclxuICAgIGxldCByZXNwb25zZURhdGE7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7Z2V0RW5kcG9pbnQoZmlyZWJhc2VEZXBlbmRlbmNpZXMuYXBwQ29uZmlnKX0vJHt0b2tlbkRldGFpbHMudG9rZW59YCwgdXBkYXRlT3B0aW9ucyk7XHJcbiAgICAgICAgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tdXBkYXRlLWZhaWxlZFwiIC8qIFRPS0VOX1VQREFURV9GQUlMRUQgKi8sIHtcclxuICAgICAgICAgICAgZXJyb3JJbmZvOiBlcnJcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChyZXNwb25zZURhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzcG9uc2VEYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11cGRhdGUtZmFpbGVkXCIgLyogVE9LRU5fVVBEQVRFX0ZBSUxFRCAqLywge1xyXG4gICAgICAgICAgICBlcnJvckluZm86IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICghcmVzcG9uc2VEYXRhLnRva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ0b2tlbi11cGRhdGUtbm8tdG9rZW5cIiAvKiBUT0tFTl9VUERBVEVfTk9fVE9LRU4gKi8pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3BvbnNlRGF0YS50b2tlbjtcclxufVxyXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0RGVsZXRlVG9rZW4oZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuKSB7XHJcbiAgICBjb25zdCBoZWFkZXJzID0gYXdhaXQgZ2V0SGVhZGVycyhmaXJlYmFzZURlcGVuZGVuY2llcyk7XHJcbiAgICBjb25zdCB1bnN1YnNjcmliZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzXHJcbiAgICB9O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke2dldEVuZHBvaW50KGZpcmViYXNlRGVwZW5kZW5jaWVzLmFwcENvbmZpZyl9LyR7dG9rZW59YCwgdW5zdWJzY3JpYmVPcHRpb25zKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS5lcnJvcikge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzcG9uc2VEYXRhLmVycm9yLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tdW5zdWJzY3JpYmUtZmFpbGVkXCIgLyogVE9LRU5fVU5TVUJTQ1JJQkVfRkFJTEVEICovLCB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckluZm86IG1lc3NhZ2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwidG9rZW4tdW5zdWJzY3JpYmUtZmFpbGVkXCIgLyogVE9LRU5fVU5TVUJTQ1JJQkVfRkFJTEVEICovLCB7XHJcbiAgICAgICAgICAgIGVycm9ySW5mbzogZXJyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0RW5kcG9pbnQoeyBwcm9qZWN0SWQgfSkge1xyXG4gICAgcmV0dXJuIGAke0VORFBPSU5UfS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vcmVnaXN0cmF0aW9uc2A7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0SGVhZGVycyh7IGFwcENvbmZpZywgaW5zdGFsbGF0aW9ucyB9KSB7XHJcbiAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBpbnN0YWxsYXRpb25zLmdldFRva2VuKCk7XHJcbiAgICByZXR1cm4gbmV3IEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgJ3gtZ29vZy1hcGkta2V5JzogYXBwQ29uZmlnLmFwaUtleSxcclxuICAgICAgICAneC1nb29nLWZpcmViYXNlLWluc3RhbGxhdGlvbnMtYXV0aCc6IGBGSVMgJHthdXRoVG9rZW59YFxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Qm9keSh7IHAyNTZkaCwgYXV0aCwgZW5kcG9pbnQsIHZhcGlkS2V5IH0pIHtcclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgd2ViOiB7XHJcbiAgICAgICAgICAgIGVuZHBvaW50LFxyXG4gICAgICAgICAgICBhdXRoLFxyXG4gICAgICAgICAgICBwMjU2ZGhcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgaWYgKHZhcGlkS2V5ICE9PSBERUZBVUxUX1ZBUElEX0tFWSkge1xyXG4gICAgICAgIGJvZHkud2ViLmFwcGxpY2F0aW9uUHViS2V5ID0gdmFwaWRLZXk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYm9keTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBVcGRhdGVSZWdpc3RyYXRpb24gd2lsbCBiZSBjYWxsZWQgb25jZSBldmVyeSB3ZWVrLlxyXG5jb25zdCBUT0tFTl9FWFBJUkFUSU9OX01TID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7IC8vIDcgZGF5c1xyXG5hc3luYyBmdW5jdGlvbiBnZXRUb2tlbkludGVybmFsKG1lc3NhZ2luZykge1xyXG4gICAgY29uc3QgcHVzaFN1YnNjcmlwdGlvbiA9IGF3YWl0IGdldFB1c2hTdWJzY3JpcHRpb24obWVzc2FnaW5nLnN3UmVnaXN0cmF0aW9uLCBtZXNzYWdpbmcudmFwaWRLZXkpO1xyXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uT3B0aW9ucyA9IHtcclxuICAgICAgICB2YXBpZEtleTogbWVzc2FnaW5nLnZhcGlkS2V5LFxyXG4gICAgICAgIHN3U2NvcGU6IG1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbi5zY29wZSxcclxuICAgICAgICBlbmRwb2ludDogcHVzaFN1YnNjcmlwdGlvbi5lbmRwb2ludCxcclxuICAgICAgICBhdXRoOiBhcnJheVRvQmFzZTY0KHB1c2hTdWJzY3JpcHRpb24uZ2V0S2V5KCdhdXRoJykpLFxyXG4gICAgICAgIHAyNTZkaDogYXJyYXlUb0Jhc2U2NChwdXNoU3Vic2NyaXB0aW9uLmdldEtleSgncDI1NmRoJykpXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG9rZW5EZXRhaWxzID0gYXdhaXQgZGJHZXQobWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzKTtcclxuICAgIGlmICghdG9rZW5EZXRhaWxzKSB7XHJcbiAgICAgICAgLy8gTm8gdG9rZW4sIGdldCBhIG5ldyBvbmUuXHJcbiAgICAgICAgcmV0dXJuIGdldE5ld1Rva2VuKG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgc3Vic2NyaXB0aW9uT3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaXNUb2tlblZhbGlkKHRva2VuRGV0YWlscy5zdWJzY3JpcHRpb25PcHRpb25zLCBzdWJzY3JpcHRpb25PcHRpb25zKSkge1xyXG4gICAgICAgIC8vIEludmFsaWQgdG9rZW4sIGdldCBhIG5ldyBvbmUuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgcmVxdWVzdERlbGV0ZVRva2VuKG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW5EZXRhaWxzLnRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgLy8gU3VwcHJlc3MgZXJyb3JzIGJlY2F1c2Ugb2YgIzIzNjRcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ2V0TmV3VG9rZW4obWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKERhdGUubm93KCkgPj0gdG9rZW5EZXRhaWxzLmNyZWF0ZVRpbWUgKyBUT0tFTl9FWFBJUkFUSU9OX01TKSB7XHJcbiAgICAgICAgLy8gV2Vla2x5IHRva2VuIHJlZnJlc2hcclxuICAgICAgICByZXR1cm4gdXBkYXRlVG9rZW4obWVzc2FnaW5nLCB7XHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlbkRldGFpbHMudG9rZW4sXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWU6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnNcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIC8vIFZhbGlkIHRva2VuLCBub3RoaW5nIHRvIGRvLlxyXG4gICAgICAgIHJldHVybiB0b2tlbkRldGFpbHMudG9rZW47XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGRlbGV0ZXMgdGhlIHRva2VuIGZyb20gdGhlIGRhdGFiYXNlLCB1bnN1YnNjcmliZXMgdGhlIHRva2VuIGZyb20gRkNNLCBhbmQgdW5yZWdpc3RlcnNcclxuICogdGhlIHB1c2ggc3Vic2NyaXB0aW9uIGlmIGl0IGV4aXN0cy5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRva2VuSW50ZXJuYWwobWVzc2FnaW5nKSB7XHJcbiAgICBjb25zdCB0b2tlbkRldGFpbHMgPSBhd2FpdCBkYkdldChtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgaWYgKHRva2VuRGV0YWlscykge1xyXG4gICAgICAgIGF3YWl0IHJlcXVlc3REZWxldGVUb2tlbihtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscy50b2tlbik7XHJcbiAgICAgICAgYXdhaXQgZGJSZW1vdmUobWVzc2FnaW5nLmZpcmViYXNlRGVwZW5kZW5jaWVzKTtcclxuICAgIH1cclxuICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gdGhlIHB1c2ggc3Vic2NyaXB0aW9uLlxyXG4gICAgY29uc3QgcHVzaFN1YnNjcmlwdGlvbiA9IGF3YWl0IG1lc3NhZ2luZy5zd1JlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5nZXRTdWJzY3JpcHRpb24oKTtcclxuICAgIGlmIChwdXNoU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHB1c2hTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gU1csIGNvbnNpZGVyIGl0IGEgc3VjY2Vzcy5cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRva2VuKG1lc3NhZ2luZywgdG9rZW5EZXRhaWxzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRUb2tlbiA9IGF3YWl0IHJlcXVlc3RVcGRhdGVUb2tlbihtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHRva2VuRGV0YWlscyk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFRva2VuRGV0YWlscyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdG9rZW5EZXRhaWxzKSwgeyB0b2tlbjogdXBkYXRlZFRva2VuLCBjcmVhdGVUaW1lOiBEYXRlLm5vdygpIH0pO1xyXG4gICAgICAgIGF3YWl0IGRiU2V0KG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcywgdXBkYXRlZFRva2VuRGV0YWlscyk7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRUb2tlbjtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgYXdhaXQgZGVsZXRlVG9rZW5JbnRlcm5hbChtZXNzYWdpbmcpO1xyXG4gICAgICAgIHRocm93IGU7XHJcbiAgICB9XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gZ2V0TmV3VG9rZW4oZmlyZWJhc2VEZXBlbmRlbmNpZXMsIHN1YnNjcmlwdGlvbk9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgcmVxdWVzdEdldFRva2VuKGZpcmViYXNlRGVwZW5kZW5jaWVzLCBzdWJzY3JpcHRpb25PcHRpb25zKTtcclxuICAgIGNvbnN0IHRva2VuRGV0YWlscyA9IHtcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICBjcmVhdGVUaW1lOiBEYXRlLm5vdygpLFxyXG4gICAgICAgIHN1YnNjcmlwdGlvbk9wdGlvbnNcclxuICAgIH07XHJcbiAgICBhd2FpdCBkYlNldChmaXJlYmFzZURlcGVuZGVuY2llcywgdG9rZW5EZXRhaWxzKTtcclxuICAgIHJldHVybiB0b2tlbkRldGFpbHMudG9rZW47XHJcbn1cclxuLyoqXHJcbiAqIEdldHMgYSBQdXNoU3Vic2NyaXB0aW9uIGZvciB0aGUgY3VycmVudCB1c2VyLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UHVzaFN1YnNjcmlwdGlvbihzd1JlZ2lzdHJhdGlvbiwgdmFwaWRLZXkpIHtcclxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHN3UmVnaXN0cmF0aW9uLnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xyXG4gICAgaWYgKHN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgIHJldHVybiBzdWJzY3JpcHRpb247XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3dSZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuc3Vic2NyaWJlKHtcclxuICAgICAgICB1c2VyVmlzaWJsZU9ubHk6IHRydWUsXHJcbiAgICAgICAgLy8gQ2hyb21lIDw9IDc1IGRvZXNuJ3Qgc3VwcG9ydCBiYXNlNjQtZW5jb2RlZCBWQVBJRCBrZXkuIEZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LCBWQVBJRCBrZXlcclxuICAgICAgICAvLyBzdWJtaXR0ZWQgdG8gcHVzaE1hbmFnZXIjc3Vic2NyaWJlIG11c3QgYmUgb2YgdHlwZSBVaW50OEFycmF5LlxyXG4gICAgICAgIGFwcGxpY2F0aW9uU2VydmVyS2V5OiBiYXNlNjRUb0FycmF5KHZhcGlkS2V5KVxyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqIENoZWNrcyBpZiB0aGUgc2F2ZWQgdG9rZW5EZXRhaWxzIG9iamVjdCBtYXRjaGVzIHRoZSBjb25maWd1cmF0aW9uIHByb3ZpZGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNUb2tlblZhbGlkKGRiT3B0aW9ucywgY3VycmVudE9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGlzVmFwaWRLZXlFcXVhbCA9IGN1cnJlbnRPcHRpb25zLnZhcGlkS2V5ID09PSBkYk9wdGlvbnMudmFwaWRLZXk7XHJcbiAgICBjb25zdCBpc0VuZHBvaW50RXF1YWwgPSBjdXJyZW50T3B0aW9ucy5lbmRwb2ludCA9PT0gZGJPcHRpb25zLmVuZHBvaW50O1xyXG4gICAgY29uc3QgaXNBdXRoRXF1YWwgPSBjdXJyZW50T3B0aW9ucy5hdXRoID09PSBkYk9wdGlvbnMuYXV0aDtcclxuICAgIGNvbnN0IGlzUDI1NmRoRXF1YWwgPSBjdXJyZW50T3B0aW9ucy5wMjU2ZGggPT09IGRiT3B0aW9ucy5wMjU2ZGg7XHJcbiAgICByZXR1cm4gaXNWYXBpZEtleUVxdWFsICYmIGlzRW5kcG9pbnRFcXVhbCAmJiBpc0F1dGhFcXVhbCAmJiBpc1AyNTZkaEVxdWFsO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dGVybmFsaXplUGF5bG9hZChpbnRlcm5hbFBheWxvYWQpIHtcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7XHJcbiAgICAgICAgZnJvbTogaW50ZXJuYWxQYXlsb2FkLmZyb20sXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gICAgICAgIGNvbGxhcHNlS2V5OiBpbnRlcm5hbFBheWxvYWQuY29sbGFwc2Vfa2V5LFxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuICAgICAgICBtZXNzYWdlSWQ6IGludGVybmFsUGF5bG9hZC5mY21fbWVzc2FnZV9pZFxyXG4gICAgfTtcclxuICAgIHByb3BhZ2F0ZU5vdGlmaWNhdGlvblBheWxvYWQocGF5bG9hZCwgaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIHByb3BhZ2F0ZURhdGFQYXlsb2FkKHBheWxvYWQsIGludGVybmFsUGF5bG9hZCk7XHJcbiAgICBwcm9wYWdhdGVGY21PcHRpb25zKHBheWxvYWQsIGludGVybmFsUGF5bG9hZCk7XHJcbiAgICByZXR1cm4gcGF5bG9hZDtcclxufVxyXG5mdW5jdGlvbiBwcm9wYWdhdGVOb3RpZmljYXRpb25QYXlsb2FkKHBheWxvYWQsIG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwpIHtcclxuICAgIGlmICghbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5ub3RpZmljYXRpb24pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBwYXlsb2FkLm5vdGlmaWNhdGlvbiA9IHt9O1xyXG4gICAgY29uc3QgdGl0bGUgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbi50aXRsZTtcclxuICAgIGlmICghIXRpdGxlKSB7XHJcbiAgICAgICAgcGF5bG9hZC5ub3RpZmljYXRpb24udGl0bGUgPSB0aXRsZTtcclxuICAgIH1cclxuICAgIGNvbnN0IGJvZHkgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbi5ib2R5O1xyXG4gICAgaWYgKCEhYm9keSkge1xyXG4gICAgICAgIHBheWxvYWQubm90aWZpY2F0aW9uLmJvZHkgPSBib2R5O1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW1hZ2UgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLm5vdGlmaWNhdGlvbi5pbWFnZTtcclxuICAgIGlmICghIWltYWdlKSB7XHJcbiAgICAgICAgcGF5bG9hZC5ub3RpZmljYXRpb24uaW1hZ2UgPSBpbWFnZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwcm9wYWdhdGVEYXRhUGF5bG9hZChwYXlsb2FkLCBtZXNzYWdlUGF5bG9hZEludGVybmFsKSB7XHJcbiAgICBpZiAoIW1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwuZGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHBheWxvYWQuZGF0YSA9IG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwuZGF0YTtcclxufVxyXG5mdW5jdGlvbiBwcm9wYWdhdGVGY21PcHRpb25zKHBheWxvYWQsIG1lc3NhZ2VQYXlsb2FkSW50ZXJuYWwpIHtcclxuICAgIGlmICghbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5mY21PcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgcGF5bG9hZC5mY21PcHRpb25zID0ge307XHJcbiAgICBjb25zdCBsaW5rID0gbWVzc2FnZVBheWxvYWRJbnRlcm5hbC5mY21PcHRpb25zLmxpbms7XHJcbiAgICBpZiAoISFsaW5rKSB7XHJcbiAgICAgICAgcGF5bG9hZC5mY21PcHRpb25zLmxpbmsgPSBsaW5rO1xyXG4gICAgfVxyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gICAgY29uc3QgYW5hbHl0aWNzTGFiZWwgPSBtZXNzYWdlUGF5bG9hZEludGVybmFsLmZjbU9wdGlvbnMuYW5hbHl0aWNzX2xhYmVsO1xyXG4gICAgaWYgKCEhYW5hbHl0aWNzTGFiZWwpIHtcclxuICAgICAgICBwYXlsb2FkLmZjbU9wdGlvbnMuYW5hbHl0aWNzTGFiZWwgPSBhbmFseXRpY3NMYWJlbDtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc0NvbnNvbGVNZXNzYWdlKGRhdGEpIHtcclxuICAgIC8vIFRoaXMgbWVzc2FnZSBoYXMgYSBjYW1wYWlnbiBJRCwgbWVhbmluZyBpdCB3YXMgc2VudCB1c2luZyB0aGUgRmlyZWJhc2UgQ29uc29sZS5cclxuICAgIHJldHVybiB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgISFkYXRhICYmIENPTlNPTEVfQ0FNUEFJR05fSUQgaW4gZGF0YTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKiogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciBnaXZlbiB0aW1lIHBhc3Nlcy4gKi9cclxuZnVuY3Rpb24gc2xlZXAobXMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcclxuICAgIH0pO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbl9tZXJnZVN0cmluZ3MoJ2h0cy9mcmJzbGdpZ3Aub2dlcHNjbXYvaWVvL2VheWxnJywgJ3RwOi9pZWFlb2duLWFnb2xhaS5vLzFmcmxnbGdjL28nKTtcclxuX21lcmdlU3RyaW5ncygnQXpTQ2J3NjNnMVIwbkN3ODVqRzgnLCAnSWF5YTN5TEt3bWd2aDdjRjBxNCcpO1xyXG5hc3luYyBmdW5jdGlvbiBzdGFnZUxvZyhtZXNzYWdpbmcsIGludGVybmFsUGF5bG9hZCkge1xyXG4gICAgY29uc3QgZmNtRXZlbnQgPSBjcmVhdGVGY21FdmVudChpbnRlcm5hbFBheWxvYWQsIGF3YWl0IG1lc3NhZ2luZy5maXJlYmFzZURlcGVuZGVuY2llcy5pbnN0YWxsYXRpb25zLmdldElkKCkpO1xyXG4gICAgY3JlYXRlQW5kRW5xdWV1ZUxvZ0V2ZW50KG1lc3NhZ2luZywgZmNtRXZlbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUZjbUV2ZW50KGludGVybmFsUGF5bG9hZCwgZmlkKSB7XHJcbiAgICB2YXIgX2EsIF9iO1xyXG4gICAgY29uc3QgZmNtRXZlbnQgPSB7fTtcclxuICAgIC8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG4gICAgLy8gc29tZSBmaWVsZHMgc2hvdWxkIGFsd2F5cyBiZSBub24tbnVsbC4gU3RpbGwgY2hlY2sgdG8gZW5zdXJlLlxyXG4gICAgaWYgKCEhaW50ZXJuYWxQYXlsb2FkLmZyb20pIHtcclxuICAgICAgICBmY21FdmVudC5wcm9qZWN0X251bWJlciA9IGludGVybmFsUGF5bG9hZC5mcm9tO1xyXG4gICAgfVxyXG4gICAgaWYgKCEhaW50ZXJuYWxQYXlsb2FkLmZjbV9tZXNzYWdlX2lkKSB7XHJcbiAgICAgICAgZmNtRXZlbnQubWVzc2FnZV9pZCA9IGludGVybmFsUGF5bG9hZC5mY21fbWVzc2FnZV9pZDtcclxuICAgIH1cclxuICAgIGZjbUV2ZW50Lmluc3RhbmNlX2lkID0gZmlkO1xyXG4gICAgaWYgKCEhaW50ZXJuYWxQYXlsb2FkLm5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIGZjbUV2ZW50Lm1lc3NhZ2VfdHlwZSA9IE1lc3NhZ2VUeXBlJDEuRElTUExBWV9OT1RJRklDQVRJT04udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZjbUV2ZW50Lm1lc3NhZ2VfdHlwZSA9IE1lc3NhZ2VUeXBlJDEuREFUQV9NRVNTQUdFLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgICBmY21FdmVudC5zZGtfcGxhdGZvcm0gPSBTREtfUExBVEZPUk1fV0VCLnRvU3RyaW5nKCk7XHJcbiAgICBmY21FdmVudC5wYWNrYWdlX25hbWUgPSBzZWxmLm9yaWdpbi5yZXBsYWNlKC8oXlxcdys6fF4pXFwvXFwvLywgJycpO1xyXG4gICAgaWYgKCEhaW50ZXJuYWxQYXlsb2FkLmNvbGxhcHNlX2tleSkge1xyXG4gICAgICAgIGZjbUV2ZW50LmNvbGxhcHNlX2tleSA9IGludGVybmFsUGF5bG9hZC5jb2xsYXBzZV9rZXk7XHJcbiAgICB9XHJcbiAgICBmY21FdmVudC5ldmVudCA9IEVWRU5UX01FU1NBR0VfREVMSVZFUkVELnRvU3RyaW5nKCk7XHJcbiAgICBpZiAoISEoKF9hID0gaW50ZXJuYWxQYXlsb2FkLmZjbU9wdGlvbnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hbmFseXRpY3NfbGFiZWwpKSB7XHJcbiAgICAgICAgZmNtRXZlbnQuYW5hbHl0aWNzX2xhYmVsID0gKF9iID0gaW50ZXJuYWxQYXlsb2FkLmZjbU9wdGlvbnMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5hbmFseXRpY3NfbGFiZWw7XHJcbiAgICB9XHJcbiAgICAvKiBlc2xpbnQtZW5hYmxlIGNhbWVsY2FzZSAqL1xyXG4gICAgcmV0dXJuIGZjbUV2ZW50O1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUFuZEVucXVldWVMb2dFdmVudChtZXNzYWdpbmcsIGZjbUV2ZW50KSB7XHJcbiAgICBjb25zdCBsb2dFdmVudCA9IHt9O1xyXG4gICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXHJcbiAgICBsb2dFdmVudC5ldmVudF90aW1lX21zID0gTWF0aC5mbG9vcihEYXRlLm5vdygpKS50b1N0cmluZygpO1xyXG4gICAgbG9nRXZlbnQuc291cmNlX2V4dGVuc2lvbl9qc29uX3Byb3RvMyA9IEpTT04uc3RyaW5naWZ5KGZjbUV2ZW50KTtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcclxuICAgIG1lc3NhZ2luZy5sb2dFdmVudHMucHVzaChsb2dFdmVudCk7XHJcbn1cclxuZnVuY3Rpb24gX21lcmdlU3RyaW5ncyhzMSwgczIpIHtcclxuICAgIGNvbnN0IHJlc3VsdEFycmF5ID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVzdWx0QXJyYXkucHVzaChzMS5jaGFyQXQoaSkpO1xyXG4gICAgICAgIGlmIChpIDwgczIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdEFycmF5LnB1c2goczIuY2hhckF0KGkpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0QXJyYXkuam9pbignJyk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gb25TdWJDaGFuZ2UoZXZlbnQsIG1lc3NhZ2luZykge1xyXG4gICAgdmFyIF9hLCBfYjtcclxuICAgIGNvbnN0IHsgbmV3U3Vic2NyaXB0aW9uIH0gPSBldmVudDtcclxuICAgIGlmICghbmV3U3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgLy8gU3Vic2NyaXB0aW9uIHJldm9rZWQsIGRlbGV0ZSB0b2tlblxyXG4gICAgICAgIGF3YWl0IGRlbGV0ZVRva2VuSW50ZXJuYWwobWVzc2FnaW5nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB0b2tlbkRldGFpbHMgPSBhd2FpdCBkYkdldChtZXNzYWdpbmcuZmlyZWJhc2VEZXBlbmRlbmNpZXMpO1xyXG4gICAgYXdhaXQgZGVsZXRlVG9rZW5JbnRlcm5hbChtZXNzYWdpbmcpO1xyXG4gICAgbWVzc2FnaW5nLnZhcGlkS2V5ID1cclxuICAgICAgICAoX2IgPSAoX2EgPSB0b2tlbkRldGFpbHMgPT09IG51bGwgfHwgdG9rZW5EZXRhaWxzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0b2tlbkRldGFpbHMuc3Vic2NyaXB0aW9uT3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhcGlkS2V5KSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBERUZBVUxUX1ZBUElEX0tFWTtcclxuICAgIGF3YWl0IGdldFRva2VuSW50ZXJuYWwobWVzc2FnaW5nKTtcclxufVxyXG5hc3luYyBmdW5jdGlvbiBvblB1c2goZXZlbnQsIG1lc3NhZ2luZykge1xyXG4gICAgY29uc3QgaW50ZXJuYWxQYXlsb2FkID0gZ2V0TWVzc2FnZVBheWxvYWRJbnRlcm5hbChldmVudCk7XHJcbiAgICBpZiAoIWludGVybmFsUGF5bG9hZCkge1xyXG4gICAgICAgIC8vIEZhaWxlZCB0byBnZXQgcGFyc2VkIE1lc3NhZ2VQYXlsb2FkIGZyb20gdGhlIFB1c2hFdmVudC4gU2tpcCBoYW5kbGluZyB0aGUgcHVzaC5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyBsb2cgdG8gRmlyZWxvZyB3aXRoIHVzZXIgY29uc2VudFxyXG4gICAgaWYgKG1lc3NhZ2luZy5kZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkKSB7XHJcbiAgICAgICAgYXdhaXQgc3RhZ2VMb2cobWVzc2FnaW5nLCBpbnRlcm5hbFBheWxvYWQpO1xyXG4gICAgfVxyXG4gICAgLy8gZm9yZWdyb3VuZCBoYW5kbGluZzogZXZlbnR1YWxseSBwYXNzZWQgdG8gb25NZXNzYWdlIGhvb2tcclxuICAgIGNvbnN0IGNsaWVudExpc3QgPSBhd2FpdCBnZXRDbGllbnRMaXN0KCk7XHJcbiAgICBpZiAoaGFzVmlzaWJsZUNsaWVudHMoY2xpZW50TGlzdCkpIHtcclxuICAgICAgICByZXR1cm4gc2VuZE1lc3NhZ2VQYXlsb2FkSW50ZXJuYWxUb1dpbmRvd3MoY2xpZW50TGlzdCwgaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIH1cclxuICAgIC8vIGJhY2tncm91bmQgaGFuZGxpbmc6IGRpc3BsYXkgaWYgcG9zc2libGUgYW5kIHBhc3MgdG8gb25CYWNrZ3JvdW5kTWVzc2FnZSBob29rXHJcbiAgICBpZiAoISFpbnRlcm5hbFBheWxvYWQubm90aWZpY2F0aW9uKSB7XHJcbiAgICAgICAgYXdhaXQgc2hvd05vdGlmaWNhdGlvbih3cmFwSW50ZXJuYWxQYXlsb2FkKGludGVybmFsUGF5bG9hZCkpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFtZXNzYWdpbmcpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoISFtZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIpIHtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0gZXh0ZXJuYWxpemVQYXlsb2FkKGludGVybmFsUGF5bG9hZCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBtZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgbWVzc2FnaW5nLm9uQmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyKHBheWxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnaW5nLm9uQmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyLm5leHQocGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmFzeW5jIGZ1bmN0aW9uIG9uTm90aWZpY2F0aW9uQ2xpY2soZXZlbnQpIHtcclxuICAgIHZhciBfYSwgX2I7XHJcbiAgICBjb25zdCBpbnRlcm5hbFBheWxvYWQgPSAoX2IgPSAoX2EgPSBldmVudC5ub3RpZmljYXRpb24pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kYXRhKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2JbRkNNX01TR107XHJcbiAgICBpZiAoIWludGVybmFsUGF5bG9hZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2ZW50LmFjdGlvbikge1xyXG4gICAgICAgIC8vIFVzZXIgY2xpY2tlZCBvbiBhbiBhY3Rpb24gYnV0dG9uLiBUaGlzIHdpbGwgYWxsb3cgZGV2ZWxvcGVycyB0byBhY3Qgb24gYWN0aW9uIGJ1dHRvbiBjbGlja3NcclxuICAgICAgICAvLyBieSB1c2luZyBhIGN1c3RvbSBvbk5vdGlmaWNhdGlvbkNsaWNrIGxpc3RlbmVyIHRoYXQgdGhleSBkZWZpbmUuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gUHJldmVudCBvdGhlciBsaXN0ZW5lcnMgZnJvbSByZWNlaXZpbmcgdGhlIGV2ZW50XHJcbiAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgIGV2ZW50Lm5vdGlmaWNhdGlvbi5jbG9zZSgpO1xyXG4gICAgLy8gTm90ZSBjbGlja2luZyBvbiBhIG5vdGlmaWNhdGlvbiB3aXRoIG5vIGxpbmsgc2V0IHdpbGwgZm9jdXMgdGhlIENocm9tZSdzIGN1cnJlbnQgdGFiLlxyXG4gICAgY29uc3QgbGluayA9IGdldExpbmsoaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIGlmICghbGluaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIEZNIHNob3VsZCBvbmx5IG9wZW4vZm9jdXMgbGlua3MgZnJvbSBhcHAncyBvcmlnaW4uXHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGxpbmssIHNlbGYubG9jYXRpb24uaHJlZik7XHJcbiAgICBjb25zdCBvcmlnaW5VcmwgPSBuZXcgVVJMKHNlbGYubG9jYXRpb24ub3JpZ2luKTtcclxuICAgIGlmICh1cmwuaG9zdCAhPT0gb3JpZ2luVXJsLmhvc3QpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgY2xpZW50ID0gYXdhaXQgZ2V0V2luZG93Q2xpZW50KHVybCk7XHJcbiAgICBpZiAoIWNsaWVudCkge1xyXG4gICAgICAgIGNsaWVudCA9IGF3YWl0IHNlbGYuY2xpZW50cy5vcGVuV2luZG93KGxpbmspO1xyXG4gICAgICAgIC8vIFdhaXQgdGhyZWUgc2Vjb25kcyBmb3IgdGhlIGNsaWVudCB0byBpbml0aWFsaXplIGFuZCBzZXQgdXAgdGhlIG1lc3NhZ2UgaGFuZGxlciBzbyB0aGF0IGl0XHJcbiAgICAgICAgLy8gY2FuIHJlY2VpdmUgdGhlIG1lc3NhZ2UuXHJcbiAgICAgICAgYXdhaXQgc2xlZXAoMzAwMCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjbGllbnQgPSBhd2FpdCBjbGllbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICghY2xpZW50KSB7XHJcbiAgICAgICAgLy8gV2luZG93IENsaWVudCB3aWxsIG5vdCBiZSByZXR1cm5lZCBpZiBpdCdzIGZvciBhIHRoaXJkIHBhcnR5IG9yaWdpbi5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpbnRlcm5hbFBheWxvYWQubWVzc2FnZVR5cGUgPSBNZXNzYWdlVHlwZS5OT1RJRklDQVRJT05fQ0xJQ0tFRDtcclxuICAgIGludGVybmFsUGF5bG9hZC5pc0ZpcmViYXNlTWVzc2FnaW5nID0gdHJ1ZTtcclxuICAgIHJldHVybiBjbGllbnQucG9zdE1lc3NhZ2UoaW50ZXJuYWxQYXlsb2FkKTtcclxufVxyXG5mdW5jdGlvbiB3cmFwSW50ZXJuYWxQYXlsb2FkKGludGVybmFsUGF5bG9hZCkge1xyXG4gICAgY29uc3Qgd3JhcHBlZEludGVybmFsUGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oe30sIGludGVybmFsUGF5bG9hZC5ub3RpZmljYXRpb24pO1xyXG4gICAgLy8gUHV0IHRoZSBtZXNzYWdlIHBheWxvYWQgdW5kZXIgRkNNX01TRyBuYW1lIHNvIHdlIGNhbiBpZGVudGlmeSB0aGUgbm90aWZpY2F0aW9uIGFzIGJlaW5nIGFuIEZDTVxyXG4gICAgLy8gbm90aWZpY2F0aW9uIHZzIGEgbm90aWZpY2F0aW9uIGZyb20gc29tZXdoZXJlIGVsc2UgKGkuZS4gbm9ybWFsIHdlYiBwdXNoIG9yIGRldmVsb3BlciBnZW5lcmF0ZWRcclxuICAgIC8vIG5vdGlmaWNhdGlvbikuXHJcbiAgICB3cmFwcGVkSW50ZXJuYWxQYXlsb2FkLmRhdGEgPSB7XHJcbiAgICAgICAgW0ZDTV9NU0ddOiBpbnRlcm5hbFBheWxvYWRcclxuICAgIH07XHJcbiAgICByZXR1cm4gd3JhcHBlZEludGVybmFsUGF5bG9hZDtcclxufVxyXG5mdW5jdGlvbiBnZXRNZXNzYWdlUGF5bG9hZEludGVybmFsKHsgZGF0YSB9KSB7XHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIC8vIE5vdCBKU09OIHNvIG5vdCBhbiBGQ00gbWVzc2FnZS5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG4vKipcclxuICogQHBhcmFtIHVybCBUaGUgVVJMIHRvIGxvb2sgZm9yIHdoZW4gZm9jdXNpbmcgYSBjbGllbnQuXHJcbiAqIEByZXR1cm4gUmV0dXJucyBhbiBleGlzdGluZyB3aW5kb3cgY2xpZW50IG9yIGEgbmV3bHkgb3BlbmVkIFdpbmRvd0NsaWVudC5cclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFdpbmRvd0NsaWVudCh1cmwpIHtcclxuICAgIGNvbnN0IGNsaWVudExpc3QgPSBhd2FpdCBnZXRDbGllbnRMaXN0KCk7XHJcbiAgICBmb3IgKGNvbnN0IGNsaWVudCBvZiBjbGllbnRMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgY2xpZW50VXJsID0gbmV3IFVSTChjbGllbnQudXJsLCBzZWxmLmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmICh1cmwuaG9zdCA9PT0gY2xpZW50VXJsLmhvc3QpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNsaWVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxufVxyXG4vKipcclxuICogQHJldHVybnMgSWYgdGhlcmUgaXMgY3VycmVudGx5IGEgdmlzaWJsZSBXaW5kb3dDbGllbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmVzb2x2ZSB0byB0cnVlLFxyXG4gKiBvdGhlcndpc2UgZmFsc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBoYXNWaXNpYmxlQ2xpZW50cyhjbGllbnRMaXN0KSB7XHJcbiAgICByZXR1cm4gY2xpZW50TGlzdC5zb21lKGNsaWVudCA9PiBjbGllbnQudmlzaWJpbGl0eVN0YXRlID09PSAndmlzaWJsZScgJiZcclxuICAgICAgICAvLyBJZ25vcmUgY2hyb21lLWV4dGVuc2lvbiBjbGllbnRzIGFzIHRoYXQgbWF0Y2hlcyB0aGUgYmFja2dyb3VuZCBwYWdlcyBvZiBleHRlbnNpb25zLCB3aGljaFxyXG4gICAgICAgIC8vIGFyZSBhbHdheXMgY29uc2lkZXJlZCB2aXNpYmxlIGZvciBzb21lIHJlYXNvbi5cclxuICAgICAgICAhY2xpZW50LnVybC5zdGFydHNXaXRoKCdjaHJvbWUtZXh0ZW5zaW9uOi8vJykpO1xyXG59XHJcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlUGF5bG9hZEludGVybmFsVG9XaW5kb3dzKGNsaWVudExpc3QsIGludGVybmFsUGF5bG9hZCkge1xyXG4gICAgaW50ZXJuYWxQYXlsb2FkLmlzRmlyZWJhc2VNZXNzYWdpbmcgPSB0cnVlO1xyXG4gICAgaW50ZXJuYWxQYXlsb2FkLm1lc3NhZ2VUeXBlID0gTWVzc2FnZVR5cGUuUFVTSF9SRUNFSVZFRDtcclxuICAgIGZvciAoY29uc3QgY2xpZW50IG9mIGNsaWVudExpc3QpIHtcclxuICAgICAgICBjbGllbnQucG9zdE1lc3NhZ2UoaW50ZXJuYWxQYXlsb2FkKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRDbGllbnRMaXN0KCkge1xyXG4gICAgcmV0dXJuIHNlbGYuY2xpZW50cy5tYXRjaEFsbCh7XHJcbiAgICAgICAgdHlwZTogJ3dpbmRvdycsXHJcbiAgICAgICAgaW5jbHVkZVVuY29udHJvbGxlZDogdHJ1ZVxyXG4gICAgICAgIC8vIFRTIGRvZXNuJ3Qga25vdyB0aGF0IFwidHlwZTogJ3dpbmRvdydcIiBtZWFucyBpdCdsbCByZXR1cm4gV2luZG93Q2xpZW50W11cclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obm90aWZpY2F0aW9uUGF5bG9hZEludGVybmFsKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICAvLyBOb3RlOiBGaXJlZm94IGRvZXMgbm90IHN1cHBvcnQgdGhlIG1heEFjdGlvbnMgcHJvcGVydHkuXHJcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvbm90aWZpY2F0aW9uL21heEFjdGlvbnNcclxuICAgIGNvbnN0IHsgYWN0aW9ucyB9ID0gbm90aWZpY2F0aW9uUGF5bG9hZEludGVybmFsO1xyXG4gICAgY29uc3QgeyBtYXhBY3Rpb25zIH0gPSBOb3RpZmljYXRpb247XHJcbiAgICBpZiAoYWN0aW9ucyAmJiBtYXhBY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoID4gbWF4QWN0aW9ucykge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihgVGhpcyBicm93c2VyIG9ubHkgc3VwcG9ydHMgJHttYXhBY3Rpb25zfSBhY3Rpb25zLiBUaGUgcmVtYWluaW5nIGFjdGlvbnMgd2lsbCBub3QgYmUgZGlzcGxheWVkLmApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oXHJcbiAgICAvKiB0aXRsZT0gKi8gKF9hID0gbm90aWZpY2F0aW9uUGF5bG9hZEludGVybmFsLnRpdGxlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJywgbm90aWZpY2F0aW9uUGF5bG9hZEludGVybmFsKTtcclxufVxyXG5mdW5jdGlvbiBnZXRMaW5rKHBheWxvYWQpIHtcclxuICAgIHZhciBfYSwgX2IsIF9jO1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxyXG4gICAgY29uc3QgbGluayA9IChfYiA9IChfYSA9IHBheWxvYWQuZmNtT3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxpbmspICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IChfYyA9IHBheWxvYWQubm90aWZpY2F0aW9uKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2xpY2tfYWN0aW9uO1xyXG4gICAgaWYgKGxpbmspIHtcclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH1cclxuICAgIGlmIChpc0NvbnNvbGVNZXNzYWdlKHBheWxvYWQuZGF0YSkpIHtcclxuICAgICAgICAvLyBOb3RpZmljYXRpb24gY3JlYXRlZCBpbiB0aGUgRmlyZWJhc2UgQ29uc29sZS4gUmVkaXJlY3QgdG8gb3JpZ2luLlxyXG4gICAgICAgIHJldHVybiBzZWxmLmxvY2F0aW9uLm9yaWdpbjtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGV4dHJhY3RBcHBDb25maWcoYXBwKSB7XHJcbiAgICBpZiAoIWFwcCB8fCAhYXBwLm9wdGlvbnMpIHtcclxuICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcignQXBwIENvbmZpZ3VyYXRpb24gT2JqZWN0Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWFwcC5uYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBOYW1lJyk7XHJcbiAgICB9XHJcbiAgICAvLyBSZXF1aXJlZCBhcHAgY29uZmlnIGtleXNcclxuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSBbXHJcbiAgICAgICAgJ3Byb2plY3RJZCcsXHJcbiAgICAgICAgJ2FwaUtleScsXHJcbiAgICAgICAgJ2FwcElkJyxcclxuICAgICAgICAnbWVzc2FnaW5nU2VuZGVySWQnXHJcbiAgICBdO1xyXG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBhcHA7XHJcbiAgICBmb3IgKGNvbnN0IGtleU5hbWUgb2YgY29uZmlnS2V5cykge1xyXG4gICAgICAgIGlmICghb3B0aW9uc1trZXlOYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBnZXRNaXNzaW5nVmFsdWVFcnJvcihrZXlOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGFwcE5hbWU6IGFwcC5uYW1lLFxyXG4gICAgICAgIHByb2plY3RJZDogb3B0aW9ucy5wcm9qZWN0SWQsXHJcbiAgICAgICAgYXBpS2V5OiBvcHRpb25zLmFwaUtleSxcclxuICAgICAgICBhcHBJZDogb3B0aW9ucy5hcHBJZCxcclxuICAgICAgICBzZW5kZXJJZDogb3B0aW9ucy5tZXNzYWdpbmdTZW5kZXJJZFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRNaXNzaW5nVmFsdWVFcnJvcih2YWx1ZU5hbWUpIHtcclxuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBNSVNTSU5HX0FQUF9DT05GSUdfVkFMVUVTICovLCB7XHJcbiAgICAgICAgdmFsdWVOYW1lXHJcbiAgICB9KTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBNZXNzYWdpbmdTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFwcCwgaW5zdGFsbGF0aW9ucywgYW5hbHl0aWNzUHJvdmlkZXIpIHtcclxuICAgICAgICAvLyBsb2dnaW5nIGlzIG9ubHkgZG9uZSB3aXRoIGVuZCB1c2VyIGNvbnNlbnQuIERlZmF1bHQgdG8gZmFsc2UuXHJcbiAgICAgICAgdGhpcy5kZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkJhY2tncm91bmRNZXNzYWdlSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vbk1lc3NhZ2VIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxvZ0V2ZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNMb2dTZXJ2aWNlU3RhcnRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGFwcENvbmZpZyA9IGV4dHJhY3RBcHBDb25maWcoYXBwKTtcclxuICAgICAgICB0aGlzLmZpcmViYXNlRGVwZW5kZW5jaWVzID0ge1xyXG4gICAgICAgICAgICBhcHAsXHJcbiAgICAgICAgICAgIGFwcENvbmZpZyxcclxuICAgICAgICAgICAgaW5zdGFsbGF0aW9ucyxcclxuICAgICAgICAgICAgYW5hbHl0aWNzUHJvdmlkZXJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgX2RlbGV0ZSgpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgU3dNZXNzYWdpbmdGYWN0b3J5ID0gKGNvbnRhaW5lcikgPT4ge1xyXG4gICAgY29uc3QgbWVzc2FnaW5nID0gbmV3IE1lc3NhZ2luZ1NlcnZpY2UoY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKSwgY29udGFpbmVyLmdldFByb3ZpZGVyKCdpbnN0YWxsYXRpb25zLWludGVybmFsJykuZ2V0SW1tZWRpYXRlKCksIGNvbnRhaW5lci5nZXRQcm92aWRlcignYW5hbHl0aWNzLWludGVybmFsJykpO1xyXG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdwdXNoJywgZSA9PiB7XHJcbiAgICAgICAgZS53YWl0VW50aWwob25QdXNoKGUsIG1lc3NhZ2luZykpO1xyXG4gICAgfSk7XHJcbiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3B1c2hzdWJzY3JpcHRpb25jaGFuZ2UnLCBlID0+IHtcclxuICAgICAgICBlLndhaXRVbnRpbChvblN1YkNoYW5nZShlLCBtZXNzYWdpbmcpKTtcclxuICAgIH0pO1xyXG4gICAgc2VsZi5hZGRFdmVudExpc3RlbmVyKCdub3RpZmljYXRpb25jbGljaycsIGUgPT4ge1xyXG4gICAgICAgIGUud2FpdFVudGlsKG9uTm90aWZpY2F0aW9uQ2xpY2soZSkpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWVzc2FnaW5nO1xyXG59O1xyXG4vKipcclxuICogVGhlIG1lc3NhZ2luZyBpbnN0YW5jZSByZWdpc3RlcmVkIGluIHN3IGlzIG5hbWVkIGRpZmZlcmVudGx5IHRoYW4gdGhhdCBvZiBpbiBjbGllbnQuIFRoaXMgaXNcclxuICogYmVjYXVzZSBib3RoIGByZWdpc3Rlck1lc3NhZ2luZ0luV2luZG93YCBhbmQgYHJlZ2lzdGVyTWVzc2FnaW5nSW5Td2Agd291bGQgYmUgY2FsbGVkIGluXHJcbiAqIGBtZXNzYWdpbmctY29tcGF0YCBhbmQgY29tcG9uZW50IHdpdGggdGhlIHNhbWUgbmFtZSBjYW4gb25seSBiZSByZWdpc3RlcmVkIG9uY2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3Rlck1lc3NhZ2luZ0luU3coKSB7XHJcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudCgnbWVzc2FnaW5nLXN3JywgU3dNZXNzYWdpbmdGYWN0b3J5LCBcIlBVQkxJQ1wiIC8qIFBVQkxJQyAqLykpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVja3Mgd2hldGhlciBhbGwgcmVxdWlyZWQgQVBJcyBleGlzdCB3aXRoaW4gU1cgQ29udGV4dFxyXG4gKiBAcmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIGJvb2xlYW4uXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGlzU3dTdXBwb3J0ZWQoKSB7XHJcbiAgICAvLyBmaXJlYmFzZS1qcy1zZGsvaXNzdWVzLzIzOTMgcmV2ZWFscyB0aGF0IGlkYiNvcGVuIGluIFNhZmFyaSBpZnJhbWUgYW5kIEZpcmVmb3ggcHJpdmF0ZSBicm93c2luZ1xyXG4gICAgLy8gbWlnaHQgYmUgcHJvaGliaXRlZCB0byBydW4uIEluIHRoZXNlIGNvbnRleHRzLCBhbiBlcnJvciB3b3VsZCBiZSB0aHJvd24gZHVyaW5nIHRoZSBtZXNzYWdpbmdcclxuICAgIC8vIGluc3RhbnRpYXRpbmcgcGhhc2UsIGluZm9ybWluZyB0aGUgZGV2ZWxvcGVycyB0byBpbXBvcnQvY2FsbCBpc1N1cHBvcnRlZCBmb3Igc3BlY2lhbCBoYW5kbGluZy5cclxuICAgIHJldHVybiAoKGF3YWl0IHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKSkgJiZcclxuICAgICAgICAnaW5kZXhlZERCJyBpbiBzZWxmICYmXHJcbiAgICAgICAgaW5kZXhlZERCICE9PSBudWxsICYmXHJcbiAgICAgICAgJ1B1c2hNYW5hZ2VyJyBpbiBzZWxmICYmXHJcbiAgICAgICAgJ05vdGlmaWNhdGlvbicgaW4gc2VsZiAmJlxyXG4gICAgICAgIFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24ucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdzaG93Tm90aWZpY2F0aW9uJykgJiZcclxuICAgICAgICBQdXNoU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSgnZ2V0S2V5JykpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIG9uQmFja2dyb3VuZE1lc3NhZ2UkMShtZXNzYWdpbmcsIG5leHRPck9ic2VydmVyKSB7XHJcbiAgICBpZiAoc2VsZi5kb2N1bWVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJvbmx5LWF2YWlsYWJsZS1pbi1zd1wiIC8qIEFWQUlMQUJMRV9JTl9TVyAqLyk7XHJcbiAgICB9XHJcbiAgICBtZXNzYWdpbmcub25CYWNrZ3JvdW5kTWVzc2FnZUhhbmRsZXIgPSBuZXh0T3JPYnNlcnZlcjtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgbWVzc2FnaW5nLm9uQmFja2dyb3VuZE1lc3NhZ2VIYW5kbGVyID0gbnVsbDtcclxuICAgIH07XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gX3NldERlbGl2ZXJ5TWV0cmljc0V4cG9ydGVkVG9CaWdRdWVyeUVuYWJsZWQobWVzc2FnaW5nLCBlbmFibGUpIHtcclxuICAgIG1lc3NhZ2luZy5kZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkID1cclxuICAgICAgICBlbmFibGU7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHJpZXZlcyBhIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZyBpbnN0YW5jZS5cclxuICpcclxuICogQHJldHVybnMgVGhlIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZyBpbnN0YW5jZSBhc3NvY2lhdGVkIHdpdGggdGhlIHByb3ZpZGVkIGZpcmViYXNlIGFwcC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TWVzc2FnaW5nSW5TdyhhcHAgPSBnZXRBcHAoKSkge1xyXG4gICAgLy8gQ29uc2Npb3VzIGRlY2lzaW9uIHRvIG1ha2UgdGhpcyBhc3luYyBjaGVjayBub24tYmxvY2tpbmcgZHVyaW5nIHRoZSBtZXNzYWdpbmcgaW5zdGFuY2VcclxuICAgIC8vIGluaXRpYWxpemF0aW9uIHBoYXNlIGZvciBwZXJmb3JtYW5jZSBjb25zaWRlcmF0aW9uLiBBbiBlcnJvciB3b3VsZCBiZSB0aHJvd24gbGF0dGVyIGZvclxyXG4gICAgLy8gZGV2ZWxvcGVyJ3MgaW5mb3JtYXRpb24uIERldmVsb3BlcnMgY2FuIHRoZW4gY2hvb3NlIHRvIGltcG9ydCBhbmQgY2FsbCBgaXNTdXBwb3J0ZWRgIGZvclxyXG4gICAgLy8gc3BlY2lhbCBoYW5kbGluZy5cclxuICAgIGlzU3dTdXBwb3J0ZWQoKS50aGVuKGlzU3VwcG9ydGVkID0+IHtcclxuICAgICAgICAvLyBJZiBgaXNTd1N1cHBvcnRlZCgpYCByZXNvbHZlZCwgYnV0IHJldHVybmVkIGZhbHNlLlxyXG4gICAgICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJ1bnN1cHBvcnRlZC1icm93c2VyXCIgLyogVU5TVVBQT1JURURfQlJPV1NFUiAqLyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgXyA9PiB7XHJcbiAgICAgICAgLy8gSWYgYGlzU3dTdXBwb3J0ZWQoKWAgcmVqZWN0ZWQuXHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbmRleGVkLWRiLXVuc3VwcG9ydGVkXCIgLyogSU5ERVhFRF9EQl9VTlNVUFBPUlRFRCAqLyk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBfZ2V0UHJvdmlkZXIoZ2V0TW9kdWxhckluc3RhbmNlKGFwcCksICdtZXNzYWdpbmctc3cnKS5nZXRJbW1lZGlhdGUoKTtcclxufVxyXG4vKipcclxuICogQ2FsbGVkIHdoZW4gYSBtZXNzYWdlIGlzIHJlY2VpdmVkIHdoaWxlIHRoZSBhcHAgaXMgaW4gdGhlIGJhY2tncm91bmQuIEFuIGFwcCBpcyBjb25zaWRlcmVkIHRvIGJlXHJcbiAqIGluIHRoZSBiYWNrZ3JvdW5kIGlmIG5vIGFjdGl2ZSB3aW5kb3cgaXMgZGlzcGxheWVkLlxyXG4gKlxyXG4gKiBAcGFyYW0gbWVzc2FnaW5nIC0gVGhlIHtAbGluayBNZXNzYWdpbmd9IGluc3RhbmNlLlxyXG4gKiBAcGFyYW0gbmV4dE9yT2JzZXJ2ZXIgLSBUaGlzIGZ1bmN0aW9uLCBvciBvYnNlcnZlciBvYmplY3Qgd2l0aCBgbmV4dGAgZGVmaW5lZCwgaXMgY2FsbGVkIHdoZW4gYVxyXG4gKiBtZXNzYWdlIGlzIHJlY2VpdmVkIGFuZCB0aGUgYXBwIGlzIGN1cnJlbnRseSBpbiB0aGUgYmFja2dyb3VuZC5cclxuICpcclxuICogQHJldHVybnMgVG8gc3RvcCBsaXN0ZW5pbmcgZm9yIG1lc3NhZ2VzIGV4ZWN1dGUgdGhpcyByZXR1cm5lZCBmdW5jdGlvblxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBvbkJhY2tncm91bmRNZXNzYWdlKG1lc3NhZ2luZywgbmV4dE9yT2JzZXJ2ZXIpIHtcclxuICAgIG1lc3NhZ2luZyA9IGdldE1vZHVsYXJJbnN0YW5jZShtZXNzYWdpbmcpO1xyXG4gICAgcmV0dXJuIG9uQmFja2dyb3VuZE1lc3NhZ2UkMShtZXNzYWdpbmcsIG5leHRPck9ic2VydmVyKTtcclxufVxyXG4vKipcclxuICogRW5hYmxlcyBvciBkaXNhYmxlcyBGaXJlYmFzZSBDbG91ZCBNZXNzYWdpbmcgbWVzc2FnZSBkZWxpdmVyeSBtZXRyaWNzIGV4cG9ydCB0byBCaWdRdWVyeS4gQnlcclxuICogZGVmYXVsdCwgbWVzc2FnZSBkZWxpdmVyeSBtZXRyaWNzIGFyZSBub3QgZXhwb3J0ZWQgdG8gQmlnUXVlcnkuIFVzZSB0aGlzIG1ldGhvZCB0byBlbmFibGUgb3JcclxuICogZGlzYWJsZSB0aGUgZXhwb3J0IGF0IHJ1bnRpbWUuXHJcbiAqXHJcbiAqIEBwYXJhbSBtZXNzYWdpbmcgLSBUaGUgYEZpcmViYXNlTWVzc2FnaW5nYCBpbnN0YW5jZS5cclxuICogQHBhcmFtIGVuYWJsZSAtIFdoZXRoZXIgRmlyZWJhc2UgQ2xvdWQgTWVzc2FnaW5nIHNob3VsZCBleHBvcnQgbWVzc2FnZSBkZWxpdmVyeSBtZXRyaWNzIHRvXHJcbiAqIEJpZ1F1ZXJ5LlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBzZXREZWxpdmVyeU1ldHJpY3NFeHBvcnRlZFRvQmlnUXVlcnlFbmFibGVkKG1lc3NhZ2luZywgZW5hYmxlKSB7XHJcbiAgICBtZXNzYWdpbmcgPSBnZXRNb2R1bGFySW5zdGFuY2UobWVzc2FnaW5nKTtcclxuICAgIHJldHVybiBfc2V0RGVsaXZlcnlNZXRyaWNzRXhwb3J0ZWRUb0JpZ1F1ZXJ5RW5hYmxlZChtZXNzYWdpbmcsIGVuYWJsZSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxucmVnaXN0ZXJNZXNzYWdpbmdJblN3KCk7XG5cbmV4cG9ydCB7IHNldERlbGl2ZXJ5TWV0cmljc0V4cG9ydGVkVG9CaWdRdWVyeUVuYWJsZWQgYXMgZXhwZXJpbWVudGFsU2V0RGVsaXZlcnlNZXRyaWNzRXhwb3J0ZWRUb0JpZ1F1ZXJ5RW5hYmxlZCwgZ2V0TWVzc2FnaW5nSW5TdyBhcyBnZXRNZXNzYWdpbmcsIGlzU3dTdXBwb3J0ZWQgYXMgaXNTdXBwb3J0ZWQsIG9uQmFja2dyb3VuZE1lc3NhZ2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LnN3LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSAndHNsaWInO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBGaXJlYmFzZSBjb25zdGFudHMuICBTb21lIG9mIHRoZXNlIChAZGVmaW5lcykgY2FuIGJlIG92ZXJyaWRkZW4gYXQgY29tcGlsZS10aW1lLlxyXG4gKi9cclxudmFyIENPTlNUQU5UUyA9IHtcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBjbGllbnQgTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQ0xJRU5UOiBmYWxzZSxcclxuICAgIC8qKlxyXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cclxuICAgICAqL1xyXG4gICAgTk9ERV9BRE1JTjogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEZpcmViYXNlIFNESyBWZXJzaW9uXHJcbiAgICAgKi9cclxuICAgIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxyXG4gKi9cclxudmFyIGFzc2VydCA9IGZ1bmN0aW9uIChhc3NlcnRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmICghYXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgYXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3dpbmcuXHJcbiAqL1xyXG52YXIgYXNzZXJ0aW9uRXJyb3IgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIG5ldyBFcnJvcignRmlyZWJhc2UgRGF0YWJhc2UgKCcgK1xyXG4gICAgICAgIENPTlNUQU5UUy5TREtfVkVSU0lPTiArXHJcbiAgICAgICAgJykgSU5URVJOQUwgQVNTRVJUIEZBSUxFRDogJyArXHJcbiAgICAgICAgbWVzc2FnZSk7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnZhciBzdHJpbmdUb0J5dGVBcnJheSQxID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIHZhciBwID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmXHJcbiAgICAgICAgICAgIGkgKyAxIDwgc3RyLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XHJcbiAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBQYWlyXHJcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKChjICYgMHgwM2ZmKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNmZik7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcbi8qKlxyXG4gKiBUdXJucyBhbiBhcnJheSBvZiBudW1iZXJzIGludG8gdGhlIHN0cmluZyBnaXZlbiBieSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGVcclxuICogY2hhcmFjdGVycyB0byB3aGljaCB0aGUgbnVtYmVycyBjb3JyZXNwb25kLlxyXG4gKiBAcGFyYW0gYnl0ZXMgQXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgY2hhcmFjdGVycy5cclxuICogQHJldHVybiBTdHJpbmdpZmljYXRpb24gb2YgdGhlIGFycmF5LlxyXG4gKi9cclxudmFyIGJ5dGVBcnJheVRvU3RyaW5nID0gZnVuY3Rpb24gKGJ5dGVzKSB7XHJcbiAgICAvLyBUT0RPKHVzZXIpOiBVc2UgbmF0aXZlIGltcGxlbWVudGF0aW9ucyBpZi93aGVuIGF2YWlsYWJsZVxyXG4gICAgdmFyIG91dCA9IFtdO1xyXG4gICAgdmFyIHBvcyA9IDAsIGMgPSAwO1xyXG4gICAgd2hpbGUgKHBvcyA8IGJ5dGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjMSA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICBpZiAoYzEgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYzEgPiAxOTEgJiYgYzEgPCAyMjQpIHtcclxuICAgICAgICAgICAgdmFyIGMyID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMxID4gMjM5ICYmIGMxIDwgMzY1KSB7XHJcbiAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBQYWlyXHJcbiAgICAgICAgICAgIHZhciBjMiA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgdmFyIGMzID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICB2YXIgYzQgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIHZhciB1ID0gKCgoYzEgJiA3KSA8PCAxOCkgfCAoKGMyICYgNjMpIDw8IDEyKSB8ICgoYzMgJiA2MykgPDwgNikgfCAoYzQgJiA2MykpIC1cclxuICAgICAgICAgICAgICAgIDB4MTAwMDA7XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAodSA+PiAxMCkpO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkYzAwICsgKHUgJiAxMDIzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIHZhciBjMyA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYzEgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dC5qb2luKCcnKTtcclxufTtcclxuLy8gV2UgZGVmaW5lIGl0IGFzIGFuIG9iamVjdCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjbGFzcyBiZWNhdXNlIGEgY2xhc3MgY29tcGlsZWQgZG93biB0byBlczUgY2FuJ3RcclxuLy8gYmUgdHJlZXNoYWtlZC4gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvaXNzdWVzLzE2OTFcclxuLy8gU3RhdGljIGxvb2t1cCBtYXBzLCBsYXppbHkgcG9wdWxhdGVkIGJ5IGluaXRfKClcclxudmFyIGJhc2U2NCA9IHtcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byBjaGFyYWN0ZXJzLlxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICovXHJcbiAgICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogTWFwcyBieXRlcyB0byB3ZWJzYWZlIGNoYXJhY3RlcnMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBieXRlVG9DaGFyTWFwV2ViU2FmZV86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgd2Vic2FmZSBjaGFyYWN0ZXJzIHRvIGJ5dGVzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cclxuICAgICAqIEVOQ09ERURfVkFMUyBhbmQgRU5DT0RFRF9WQUxTX1dFQlNBRkVcclxuICAgICAqL1xyXG4gICAgRU5DT0RFRF9WQUxTX0JBU0U6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICsgJzAxMjM0NTY3ODknLFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldC4gVmFsdWUgNjQgKD0pIGlzIHNwZWNpYWw7IGl0IG1lYW5zIFwibm90aGluZy5cIlxyXG4gICAgICovXHJcbiAgICBnZXQgRU5DT0RFRF9WQUxTKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJysvPSc7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgd2Vic2FmZSBhbHBoYWJldC5cclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMU19XRUJTQUZFKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkVOQ09ERURfVkFMU19CQVNFICsgJy1fLic7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGV0aGVyIHRoaXMgYnJvd3NlciBzdXBwb3J0cyB0aGUgYXRvYiBhbmQgYnRvYSBmdW5jdGlvbnMuIFRoaXMgZXh0ZW5zaW9uXHJcbiAgICAgKiBzdGFydGVkIGF0IE1vemlsbGEgYnV0IGlzIG5vdyBpbXBsZW1lbnRlZCBieSBtYW55IGJyb3dzZXJzLiBXZSB1c2UgdGhlXHJcbiAgICAgKiBBU1NVTUVfKiB2YXJpYWJsZXMgdG8gYXZvaWQgcHVsbGluZyBpbiB0aGUgZnVsbCB1c2VyYWdlbnQgZGV0ZWN0aW9uIGxpYnJhcnlcclxuICAgICAqIGJ1dCBzdGlsbCBhbGxvd2luZyB0aGUgc3RhbmRhcmQgcGVyLWJyb3dzZXIgY29tcGlsYXRpb25zLlxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgSEFTX05BVElWRV9TVVBQT1JUOiB0eXBlb2YgYXRvYiA9PT0gJ2Z1bmN0aW9uJyxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxyXG4gICAgICogICAgIHZhbHVlIGluIFswLCAyNTVdKSB0byBlbmNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBCb29sZWFuIGluZGljYXRpbmcgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlQnl0ZUFycmF5OiBmdW5jdGlvbiAoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdlbmNvZGVCeXRlQXJyYXkgdGFrZXMgYW4gYXJyYXkgYXMgYSBwYXJhbWV0ZXInKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0XygpO1xyXG4gICAgICAgIHZhciBieXRlVG9DaGFyTWFwID0gd2ViU2FmZVxyXG4gICAgICAgICAgICA/IHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfXHJcbiAgICAgICAgICAgIDogdGhpcy5ieXRlVG9DaGFyTWFwXztcclxuICAgICAgICB2YXIgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZTEgPSBpbnB1dFtpXTtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlMiA9IGkgKyAxIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYnl0ZTIgPSBoYXZlQnl0ZTIgPyBpbnB1dFtpICsgMV0gOiAwO1xyXG4gICAgICAgICAgICB2YXIgaGF2ZUJ5dGUzID0gaSArIDIgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlMyA9IGhhdmVCeXRlMyA/IGlucHV0W2kgKyAyXSA6IDA7XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMSA9IGJ5dGUxID4+IDI7XHJcbiAgICAgICAgICAgIHZhciBvdXRCeXRlMiA9ICgoYnl0ZTEgJiAweDAzKSA8PCA0KSB8IChieXRlMiA+PiA0KTtcclxuICAgICAgICAgICAgdmFyIG91dEJ5dGUzID0gKChieXRlMiAmIDB4MGYpIDw8IDIpIHwgKGJ5dGUzID4+IDYpO1xyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTQgPSBieXRlMyAmIDB4M2Y7XHJcbiAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUzKSB7XHJcbiAgICAgICAgICAgICAgICBvdXRCeXRlNCA9IDY0O1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXZlQnl0ZTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRCeXRlMyA9IDY0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTFdLCBieXRlVG9DaGFyTWFwW291dEJ5dGUyXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlM10sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTRdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1lbmNvZGUgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IEEgc3RyaW5nIHRvIGVuY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIElmIHRydWUsIHdlIHNob3VsZCB1c2UgdGhlXHJcbiAgICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZVN0cmluZzogZnVuY3Rpb24gKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcclxuICAgICAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXHJcbiAgICAgICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidG9hKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5JDEoaW5wdXQpLCB3ZWJTYWZlKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nOiBmdW5jdGlvbiAoaW5wdXQsIHdlYlNhZmUpIHtcclxuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxyXG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcclxuICAgICAgICBpZiAodGhpcy5IQVNfTkFUSVZFX1NVUFBPUlQgJiYgIXdlYlNhZmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYnl0ZUFycmF5VG9TdHJpbmcodGhpcy5kZWNvZGVTdHJpbmdUb0J5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWRlY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBJbiBiYXNlLTY0IGRlY29kaW5nLCBncm91cHMgb2YgZm91ciBjaGFyYWN0ZXJzIGFyZSBjb252ZXJ0ZWQgaW50byB0aHJlZVxyXG4gICAgICogYnl0ZXMuICBJZiB0aGUgZW5jb2RlciBkaWQgbm90IGFwcGx5IHBhZGRpbmcsIHRoZSBpbnB1dCBsZW5ndGggbWF5IG5vdFxyXG4gICAgICogYmUgYSBtdWx0aXBsZSBvZiA0LlxyXG4gICAgICpcclxuICAgICAqIEluIHRoaXMgY2FzZSwgdGhlIGxhc3QgZ3JvdXAgd2lsbCBoYXZlIGZld2VyIHRoYW4gNCBjaGFyYWN0ZXJzLCBhbmRcclxuICAgICAqIHBhZGRpbmcgd2lsbCBiZSBpbmZlcnJlZC4gIElmIHRoZSBncm91cCBoYXMgb25lIG9yIHR3byBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzXHJcbiAgICAgKiB0byBvbmUgYnl0ZS4gIElmIHRoZSBncm91cCBoYXMgdGhyZWUgY2hhcmFjdGVycywgaXQgZGVjb2RlcyB0byB0d28gYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGUgd2ViLXNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIGJ5dGVzIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXk6IGZ1bmN0aW9uIChpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdF8oKTtcclxuICAgICAgICB2YXIgY2hhclRvQnl0ZU1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuY2hhclRvQnl0ZU1hcF87XHJcbiAgICAgICAgdmFyIG91dHB1dCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOykge1xyXG4gICAgICAgICAgICB2YXIgYnl0ZTEgPSBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKyspXTtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlMiA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlMiA9IGhhdmVCeXRlMiA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDA7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgdmFyIGhhdmVCeXRlMyA9IGkgPCBpbnB1dC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBieXRlMyA9IGhhdmVCeXRlMyA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIHZhciBoYXZlQnl0ZTQgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYnl0ZTQgPSBoYXZlQnl0ZTQgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBpZiAoYnl0ZTEgPT0gbnVsbCB8fCBieXRlMiA9PSBudWxsIHx8IGJ5dGUzID09IG51bGwgfHwgYnl0ZTQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgb3V0Qnl0ZTEgPSAoYnl0ZTEgPDwgMikgfCAoYnl0ZTIgPj4gNCk7XHJcbiAgICAgICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUxKTtcclxuICAgICAgICAgICAgaWYgKGJ5dGUzICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRCeXRlMyA9ICgoYnl0ZTMgPDwgNikgJiAweGMwKSB8IGJ5dGU0O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogTGF6eSBzdGF0aWMgaW5pdGlhbGl6YXRpb24gZnVuY3Rpb24uIENhbGxlZCBiZWZvcmVcclxuICAgICAqIGFjY2Vzc2luZyBhbnkgb2YgdGhlIHN0YXRpYyBtYXAgdmFyaWFibGVzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgaW5pdF86IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZ1xyXG4gKi9cclxudmFyIGJhc2U2NEVuY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciB1dGY4Qnl0ZXMgPSBzdHJpbmdUb0J5dGVBcnJheSQxKHN0cik7XHJcbiAgICByZXR1cm4gYmFzZTY0LmVuY29kZUJ5dGVBcnJheSh1dGY4Qnl0ZXMsIHRydWUpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGVuY29kaW5nICh3aXRob3V0IFwiLlwiIHBhZGRpbmcgaW4gdGhlIGVuZCkuXHJcbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cclxuICovXHJcbnZhciBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFVzZSBiYXNlNjR1cmwgZW5jb2RpbmcgYW5kIHJlbW92ZSBwYWRkaW5nIGluIHRoZSBlbmQgKGRvdCBjaGFyYWN0ZXJzKS5cclxuICAgIHJldHVybiBiYXNlNjRFbmNvZGUoc3RyKS5yZXBsYWNlKC9cXC4vZywgJycpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXHJcbiAqXHJcbiAqIE5PVEU6IERPIE5PVCB1c2UgdGhlIGdsb2JhbCBhdG9iKCkgZnVuY3Rpb24gLSBpdCBkb2VzIE5PVCBzdXBwb3J0IHRoZVxyXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cclxuICpcclxuICogQHBhcmFtIHN0ciBUbyBiZSBkZWNvZGVkXHJcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXHJcbiAqL1xyXG52YXIgYmFzZTY0RGVjb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZXR1cm4gYmFzZTY0LmRlY29kZVN0cmluZyhzdHIsIHRydWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdiYXNlNjREZWNvZGUgZmFpbGVkOiAnLCBlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogRG8gYSBkZWVwLWNvcHkgb2YgYmFzaWMgSmF2YVNjcmlwdCBPYmplY3RzIG9yIEFycmF5cy5cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBDb3B5KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh1bmRlZmluZWQsIHZhbHVlKTtcclxufVxyXG4vKipcclxuICogQ29weSBwcm9wZXJ0aWVzIGZyb20gc291cmNlIHRvIHRhcmdldCAocmVjdXJzaXZlbHkgYWxsb3dzIGV4dGVuc2lvblxyXG4gKiBvZiBPYmplY3RzIGFuZCBBcnJheXMpLiAgU2NhbGFyIHZhbHVlcyBpbiB0aGUgdGFyZ2V0IGFyZSBvdmVyLXdyaXR0ZW4uXHJcbiAqIElmIHRhcmdldCBpcyB1bmRlZmluZWQsIGFuIG9iamVjdCBvZiB0aGUgYXBwcm9wcmlhdGUgdHlwZSB3aWxsIGJlIGNyZWF0ZWRcclxuICogKGFuZCByZXR1cm5lZCkuXHJcbiAqXHJcbiAqIFdlIHJlY3Vyc2l2ZWx5IGNvcHkgYWxsIGNoaWxkIHByb3BlcnRpZXMgb2YgcGxhaW4gT2JqZWN0cyBpbiB0aGUgc291cmNlLSBzb1xyXG4gKiB0aGF0IG5hbWVzcGFjZS0gbGlrZSBkaWN0aW9uYXJpZXMgYXJlIG1lcmdlZC5cclxuICpcclxuICogTm90ZSB0aGF0IHRoZSB0YXJnZXQgY2FuIGJlIGEgZnVuY3Rpb24sIGluIHdoaWNoIGNhc2UgdGhlIHByb3BlcnRpZXMgaW5cclxuICogdGhlIHNvdXJjZSBPYmplY3QgYXJlIGNvcGllZCBvbnRvIGl0IGFzIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoZSBGdW5jdGlvbi5cclxuICpcclxuICogTm90ZTogd2UgZG9uJ3QgbWVyZ2UgX19wcm90b19fIHRvIHByZXZlbnQgcHJvdG90eXBlIHBvbGx1dGlvblxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcEV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgaWYgKCEoc291cmNlIGluc3RhbmNlb2YgT2JqZWN0KSkge1xyXG4gICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHNvdXJjZS5jb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIGNhc2UgRGF0ZTpcclxuICAgICAgICAgICAgLy8gVHJlYXQgRGF0ZXMgbGlrZSBzY2FsYXJzOyBpZiB0aGUgdGFyZ2V0IGRhdGUgb2JqZWN0IGhhZCBhbnkgY2hpbGRcclxuICAgICAgICAgICAgLy8gcHJvcGVydGllcyAtIHRoZXkgd2lsbCBiZSBsb3N0IVxyXG4gICAgICAgICAgICB2YXIgZGF0ZVZhbHVlID0gc291cmNlO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZVZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgY2FzZSBPYmplY3Q6XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBBcnJheTpcclxuICAgICAgICAgICAgLy8gQWx3YXlzIGNvcHkgdGhlIGFycmF5IHNvdXJjZSBhbmQgb3ZlcndyaXRlIHRoZSB0YXJnZXQuXHJcbiAgICAgICAgICAgIHRhcmdldCA9IFtdO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAvLyBOb3QgYSBwbGFpbiBPYmplY3QgLSB0cmVhdCBpdCBhcyBhIHNjYWxhci5cclxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIHByb3AgaW4gc291cmNlKSB7XHJcbiAgICAgICAgLy8gdXNlIGlzVmFsaWRLZXkgdG8gZ3VhcmQgYWdhaW5zdCBwcm90b3R5cGUgcG9sbHV0aW9uLiBTZWUgaHR0cHM6Ly9zbnlrLmlvL3Z1bG4vU05ZSy1KUy1MT0RBU0gtNDUwMjAyXHJcbiAgICAgICAgaWYgKCFzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkgfHwgIWlzVmFsaWRLZXkocHJvcCkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xyXG4gICAgcmV0dXJuIGtleSAhPT0gJ19fcHJvdG9fXyc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxudmFyIERlZmVycmVkID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRGVmZXJyZWQoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnJlamVjdCA9IGZ1bmN0aW9uICgpIHsgfTtcclxuICAgICAgICB0aGlzLnJlc29sdmUgPSBmdW5jdGlvbiAoKSB7IH07XHJcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgX3RoaXMucmVqZWN0ID0gcmVqZWN0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBPdXIgQVBJIGludGVybmFscyBhcmUgbm90IHByb21pc2VpZmllZCBhbmQgY2Fubm90IGJlY2F1c2Ugb3VyIGNhbGxiYWNrIEFQSXMgaGF2ZSBzdWJ0bGUgZXhwZWN0YXRpb25zIGFyb3VuZFxyXG4gICAgICogaW52b2tpbmcgcHJvbWlzZXMgaW5saW5lLCB3aGljaCBQcm9taXNlcyBhcmUgZm9yYmlkZGVuIHRvIGRvLiBUaGlzIG1ldGhvZCBhY2NlcHRzIGFuIG9wdGlvbmFsIG5vZGUtc3R5bGUgY2FsbGJhY2tcclxuICAgICAqIGFuZCByZXR1cm5zIGEgbm9kZS1zdHlsZSBjYWxsYmFjayB3aGljaCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBEZWZlcnJlZCdzIHByb21pc2UuXHJcbiAgICAgKi9cclxuICAgIERlZmVycmVkLnByb3RvdHlwZS53cmFwQ2FsbGJhY2sgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgX3RoaXMucHJvbWlzZS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gU29tZSBvZiBvdXIgY2FsbGJhY2tzIGRvbid0IGV4cGVjdCBhIHZhbHVlIGFuZCBvdXIgb3duIHRlc3RzXHJcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQgdGhhdCB0aGUgcGFyYW1ldGVyIGxlbmd0aCBpcyAxXHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2subGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERlZmVycmVkO1xyXG59KCkpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVNb2NrVXNlclRva2VuKHRva2VuLCBwcm9qZWN0SWQpIHtcclxuICAgIGlmICh0b2tlbi51aWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nKTtcclxuICAgIH1cclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSBcIm5vbmVcIiBhcyB0aGUgYWxnb3JpdGhtLlxyXG4gICAgdmFyIGhlYWRlciA9IHtcclxuICAgICAgICBhbGc6ICdub25lJyxcclxuICAgICAgICB0eXBlOiAnSldUJ1xyXG4gICAgfTtcclxuICAgIHZhciBwcm9qZWN0ID0gcHJvamVjdElkIHx8ICdkZW1vLXByb2plY3QnO1xyXG4gICAgdmFyIGlhdCA9IHRva2VuLmlhdCB8fCAwO1xyXG4gICAgdmFyIHN1YiA9IHRva2VuLnN1YiB8fCB0b2tlbi51c2VyX2lkO1xyXG4gICAgaWYgKCFzdWIpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJtb2NrVXNlclRva2VuIG11c3QgY29udGFpbiAnc3ViJyBvciAndXNlcl9pZCcgZmllbGQhXCIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHBheWxvYWQgPSBfX2Fzc2lnbih7IFxyXG4gICAgICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xyXG4gICAgICAgIGlzczogXCJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vXCIgKyBwcm9qZWN0LCBhdWQ6IHByb2plY3QsIGlhdDogaWF0LCBleHA6IGlhdCArIDM2MDAsIGF1dGhfdGltZTogaWF0LCBzdWI6IHN1YiwgdXNlcl9pZDogc3ViLCBmaXJlYmFzZToge1xyXG4gICAgICAgICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgaWRlbnRpdGllczoge31cclxuICAgICAgICB9IH0sIHRva2VuKTtcclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSB0aGUgZW1wdHkgc3RyaW5nIGFzIGEgc2lnbmF0dXJlLlxyXG4gICAgdmFyIHNpZ25hdHVyZSA9ICcnO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhKU09OLnN0cmluZ2lmeShoZWFkZXIpKSxcclxuICAgICAgICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhKU09OLnN0cmluZ2lmeShwYXlsb2FkKSksXHJcbiAgICAgICAgc2lnbmF0dXJlXHJcbiAgICBdLmpvaW4oJy4nKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBuYXZpZ2F0b3IudXNlckFnZW50IHN0cmluZyBvciAnJyBpZiBpdCdzIG5vdCBkZWZpbmVkLlxyXG4gKiBAcmV0dXJuIHVzZXIgYWdlbnQgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRVQSgpIHtcclxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQ29yZG92YSAvIFBob25lR2FwIC8gSW9uaWMgZnJhbWV3b3JrcyBvbiBhIG1vYmlsZSBkZXZpY2UuXHJcbiAqXHJcbiAqIERlbGliZXJhdGVseSBkb2VzIG5vdCByZWx5IG9uIGNoZWNraW5nIGBmaWxlOi8vYCBVUkxzIChhcyB0aGlzIGZhaWxzIFBob25lR2FwXHJcbiAqIGluIHRoZSBSaXBwbGUgZW11bGF0b3IpIG5vciBDb3Jkb3ZhIGBvbkRldmljZVJlYWR5YCwgd2hpY2ggd291bGQgbm9ybWFsbHlcclxuICogd2FpdCBmb3IgYSBjYWxsYmFjay5cclxuICovXHJcbmZ1bmN0aW9uIGlzTW9iaWxlQ29yZG92YSgpIHtcclxuICAgIHJldHVybiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAvLyBAdHMtaWdub3JlIFNldHRpbmcgdXAgYW4gYnJvYWRseSBhcHBsaWNhYmxlIGluZGV4IHNpZ25hdHVyZSBmb3IgV2luZG93XHJcbiAgICAgICAgLy8ganVzdCB0byBkZWFsIHdpdGggdGhpcyBjYXNlIHdvdWxkIHByb2JhYmx5IGJlIGEgYmFkIGlkZWEuXHJcbiAgICAgICAgISEod2luZG93Wydjb3Jkb3ZhJ10gfHwgd2luZG93WydwaG9uZWdhcCddIHx8IHdpbmRvd1snUGhvbmVHYXAnXSkgJiZcclxuICAgICAgICAvaW9zfGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlL2kudGVzdChnZXRVQSgpKSk7XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBOb2RlLmpzLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgTm9kZS5qcyBlbnZpcm9ubWVudCBpcyBkZXRlY3RlZC5cclxuICovXHJcbi8vIE5vZGUgZGV0ZWN0aW9uIGxvZ2ljIGZyb206IGh0dHBzOi8vZ2l0aHViLmNvbS9pbGlha2FuL2RldGVjdC1ub2RlL1xyXG5mdW5jdGlvbiBpc05vZGUoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGdsb2JhbC5wcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgQnJvd3NlciBFbnZpcm9ubWVudFxyXG4gKi9cclxuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmLnNlbGYgPT09IHNlbGY7XHJcbn1cclxuZnVuY3Rpb24gaXNCcm93c2VyRXh0ZW5zaW9uKCkge1xyXG4gICAgdmFyIHJ1bnRpbWUgPSB0eXBlb2YgY2hyb21lID09PSAnb2JqZWN0J1xyXG4gICAgICAgID8gY2hyb21lLnJ1bnRpbWVcclxuICAgICAgICA6IHR5cGVvZiBicm93c2VyID09PSAnb2JqZWN0J1xyXG4gICAgICAgICAgICA/IGJyb3dzZXIucnVudGltZVxyXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiB0eXBlb2YgcnVudGltZSA9PT0gJ29iamVjdCcgJiYgcnVudGltZS5pZCAhPT0gdW5kZWZpbmVkO1xyXG59XHJcbi8qKlxyXG4gKiBEZXRlY3QgUmVhY3QgTmF0aXZlLlxyXG4gKlxyXG4gKiBAcmV0dXJuIHRydWUgaWYgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1JlYWN0TmF0aXZlKCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiBuYXZpZ2F0b3JbJ3Byb2R1Y3QnXSA9PT0gJ1JlYWN0TmF0aXZlJyk7XHJcbn1cclxuLyoqIERldGVjdHMgRWxlY3Ryb24gYXBwcy4gKi9cclxuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcclxuICAgIHJldHVybiBnZXRVQSgpLmluZGV4T2YoJ0VsZWN0cm9uLycpID49IDA7XHJcbn1cclxuLyoqIERldGVjdHMgSW50ZXJuZXQgRXhwbG9yZXIuICovXHJcbmZ1bmN0aW9uIGlzSUUoKSB7XHJcbiAgICB2YXIgdWEgPSBnZXRVQSgpO1xyXG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ01TSUUgJykgPj0gMCB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpID49IDA7XHJcbn1cclxuLyoqIERldGVjdHMgVW5pdmVyc2FsIFdpbmRvd3MgUGxhdGZvcm0gYXBwcy4gKi9cclxuZnVuY3Rpb24gaXNVV1AoKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpdCdzIHRoZSBOb2RlIFNESyBidWlsZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzTm9kZVNkaygpIHtcclxuICAgIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XHJcbn1cclxuLyoqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBTYWZhcmkuICovXHJcbmZ1bmN0aW9uIGlzU2FmYXJpKCkge1xyXG4gICAgcmV0dXJuICghaXNOb2RlKCkgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdTYWZhcmknKSAmJlxyXG4gICAgICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKSk7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0luZGV4ZWREQkF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiAnaW5kZXhlZERCJyBpbiBzZWxmICYmIGluZGV4ZWREQiAhPSBudWxsO1xyXG59XHJcbi8qKlxyXG4gKiBUaGlzIG1ldGhvZCB2YWxpZGF0ZXMgYnJvd3Nlci9zdyBjb250ZXh0IGZvciBpbmRleGVkREIgYnkgb3BlbmluZyBhIGR1bW15IGluZGV4ZWREQiBkYXRhYmFzZSBhbmQgcmVqZWN0XHJcbiAqIGlmIGVycm9ycyBvY2N1ciBkdXJpbmcgdGhlIGRhdGFiYXNlIG9wZW4gb3BlcmF0aW9uLlxyXG4gKlxyXG4gKiBAdGhyb3dzIGV4Y2VwdGlvbiBpZiBjdXJyZW50IGJyb3dzZXIvc3cgY29udGV4dCBjYW4ndCBydW4gaWRiLm9wZW4gKGV4OiBTYWZhcmkgaWZyYW1lLCBGaXJlZm94XHJcbiAqIHByaXZhdGUgYnJvd3NpbmcpXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgcHJlRXhpc3RfMSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhciBEQl9DSEVDS19OQU1FXzEgPSAndmFsaWRhdGUtYnJvd3Nlci1jb250ZXh0LWZvci1pbmRleGVkZGItYW5hbHl0aWNzLW1vZHVsZSc7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0XzEgPSBzZWxmLmluZGV4ZWREQi5vcGVuKERCX0NIRUNLX05BTUVfMSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3RfMS5vbnN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0XzEucmVzdWx0LmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgZGF0YWJhc2Ugb25seSB3aGVuIGl0IGRvZXNuJ3QgcHJlLWV4aXN0XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByZUV4aXN0XzEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShEQl9DSEVDS19OQU1FXzEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdF8xLm9udXBncmFkZW5lZWRlZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHByZUV4aXN0XzEgPSBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdF8xLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKChfYSA9IHJlcXVlc3RfMS5lcnJvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm1lc3NhZ2UpIHx8ICcnKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuLyoqXHJcbiAqXHJcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyB3aGV0aGVyIGNvb2tpZSBpcyBlbmFibGVkIHdpdGhpbiBjdXJyZW50IGJyb3dzZXJcclxuICogQHJldHVybiB0cnVlIGlmIGNvb2tpZSBpcyBlbmFibGVkIHdpdGhpbiBjdXJyZW50IGJyb3dzZXJcclxuICovXHJcbmZ1bmN0aW9uIGFyZUNvb2tpZXNFbmFibGVkKCkge1xyXG4gICAgaWYgKCFuYXZpZ2F0b3IgfHwgIW5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuLyoqXHJcbiAqIFBvbHlmaWxsIGZvciBgZ2xvYmFsVGhpc2Agb2JqZWN0LlxyXG4gKiBAcmV0dXJucyB0aGUgYGdsb2JhbFRoaXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGVudmlyb25tZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdC4nKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG52YXIgRVJST1JfTkFNRSA9ICdGaXJlYmFzZUVycm9yJztcclxuLy8gQmFzZWQgb24gY29kZSBmcm9tOlxyXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9FcnJvciNDdXN0b21fRXJyb3JfVHlwZXNcclxudmFyIEZpcmViYXNlRXJyb3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoRmlyZWJhc2VFcnJvciwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIEZpcmViYXNlRXJyb3IoY29kZSwgbWVzc2FnZSwgY3VzdG9tRGF0YSkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIG1lc3NhZ2UpIHx8IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY29kZSA9IGNvZGU7XHJcbiAgICAgICAgX3RoaXMuY3VzdG9tRGF0YSA9IGN1c3RvbURhdGE7XHJcbiAgICAgICAgX3RoaXMubmFtZSA9IEVSUk9SX05BTUU7XHJcbiAgICAgICAgLy8gRml4IEZvciBFUzVcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihfdGhpcywgRmlyZWJhc2VFcnJvci5wcm90b3R5cGUpO1xyXG4gICAgICAgIC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgZm9yIHdoZXJlIG91ciBlcnJvciB3YXMgdGhyb3duLlxyXG4gICAgICAgIC8vIE9ubHkgYXZhaWxhYmxlIG9uIFY4LlxyXG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xyXG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZShfdGhpcywgRXJyb3JGYWN0b3J5LnByb3RvdHlwZS5jcmVhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gX3RoaXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gRmlyZWJhc2VFcnJvcjtcclxufShFcnJvcikpO1xyXG52YXIgRXJyb3JGYWN0b3J5ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRXJyb3JGYWN0b3J5KHNlcnZpY2UsIHNlcnZpY2VOYW1lLCBlcnJvcnMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBzZXJ2aWNlTmFtZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcclxuICAgIH1cclxuICAgIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKGNvZGUpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMTsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIGRhdGFbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjdXN0b21EYXRhID0gZGF0YVswXSB8fCB7fTtcclxuICAgICAgICB2YXIgZnVsbENvZGUgPSB0aGlzLnNlcnZpY2UgKyBcIi9cIiArIGNvZGU7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy5lcnJvcnNbY29kZV07XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB0ZW1wbGF0ZSA/IHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgY3VzdG9tRGF0YSkgOiAnRXJyb3InO1xyXG4gICAgICAgIC8vIFNlcnZpY2UgTmFtZTogRXJyb3IgbWVzc2FnZSAoc2VydmljZS9jb2RlKS5cclxuICAgICAgICB2YXIgZnVsbE1lc3NhZ2UgPSB0aGlzLnNlcnZpY2VOYW1lICsgXCI6IFwiICsgbWVzc2FnZSArIFwiIChcIiArIGZ1bGxDb2RlICsgXCIpLlwiO1xyXG4gICAgICAgIHZhciBlcnJvciA9IG5ldyBGaXJlYmFzZUVycm9yKGZ1bGxDb2RlLCBmdWxsTWVzc2FnZSwgY3VzdG9tRGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGVycm9yO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBFcnJvckZhY3Rvcnk7XHJcbn0oKSk7XHJcbmZ1bmN0aW9uIHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xyXG4gICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoUEFUVEVSTiwgZnVuY3Rpb24gKF8sIGtleSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XTtcclxuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCA/IFN0cmluZyh2YWx1ZSkgOiBcIjxcIiArIGtleSArIFwiPz5cIjtcclxuICAgIH0pO1xyXG59XHJcbnZhciBQQVRURVJOID0gL1xce1xcJChbXn1dKyl9L2c7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBFdmFsdWF0ZXMgYSBKU09OIHN0cmluZyBpbnRvIGEgamF2YXNjcmlwdCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgY29udGFpbmluZyBKU09OLlxyXG4gKiBAcmV0dXJuIHsqfSBUaGUgamF2YXNjcmlwdCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgSlNPTi5cclxuICovXHJcbmZ1bmN0aW9uIGpzb25FdmFsKHN0cikge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBKU09OIHJlcHJlc2VudGluZyBhIGphdmFzY3JpcHQgb2JqZWN0LlxyXG4gKiBAcGFyYW0geyp9IGRhdGEgSmF2YXNjcmlwdCBvYmplY3QgdG8gYmUgc3RyaW5naWZpZWQuXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEpTT04gY29udGVudHMgb2YgdGhlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeShkYXRhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBpbnRvIGNvbnN0aXR1ZW50IHBhcnRzLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIHdpdGggaW52YWxpZCAvIGluY29tcGxldGUgY2xhaW1zIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxudmFyIGRlY29kZSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGhlYWRlciA9IHt9LCBjbGFpbXMgPSB7fSwgZGF0YSA9IHt9LCBzaWduYXR1cmUgPSAnJztcclxuICAgIHRyeSB7XHJcbiAgICAgICAgdmFyIHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcclxuICAgICAgICBoZWFkZXIgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMF0pIHx8ICcnKTtcclxuICAgICAgICBjbGFpbXMgPSBqc29uRXZhbChiYXNlNjREZWNvZGUocGFydHNbMV0pIHx8ICcnKTtcclxuICAgICAgICBzaWduYXR1cmUgPSBwYXJ0c1syXTtcclxuICAgICAgICBkYXRhID0gY2xhaW1zWydkJ10gfHwge307XHJcbiAgICAgICAgZGVsZXRlIGNsYWltc1snZCddO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHsgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoZWFkZXI6IGhlYWRlcixcclxuICAgICAgICBjbGFpbXM6IGNsYWltcyxcclxuICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgIHNpZ25hdHVyZTogc2lnbmF0dXJlXHJcbiAgICB9O1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyB0aW1lLWJhc2VkIGNsYWltcy4gV2lsbCByZXR1cm4gdHJ1ZSBpZiB0aGVcclxuICogdG9rZW4gaXMgd2l0aGluIHRoZSB0aW1lIHdpbmRvdyBhdXRob3JpemVkIGJ5IHRoZSAnbmJmJyAobm90LWJlZm9yZSkgYW5kICdpYXQnIChpc3N1ZWQtYXQpIGNsYWltcy5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxudmFyIGlzVmFsaWRUaW1lc3RhbXAgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIHZhciBub3cgPSBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICB2YXIgdmFsaWRTaW5jZSA9IDAsIHZhbGlkVW50aWwgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnbmJmJykpIHtcclxuICAgICAgICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snbmJmJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcclxuICAgICAgICAgICAgdmFsaWRTaW5jZSA9IGNsYWltc1snaWF0J107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2V4cCcpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkVW50aWwgPSBjbGFpbXNbJ2V4cCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gdG9rZW4gd2lsbCBleHBpcmUgYWZ0ZXIgMjRoIGJ5IGRlZmF1bHRcclxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IHZhbGlkU2luY2UgKyA4NjQwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCEhbm93ICYmXHJcbiAgICAgICAgISF2YWxpZFNpbmNlICYmXHJcbiAgICAgICAgISF2YWxpZFVudGlsICYmXHJcbiAgICAgICAgbm93ID49IHZhbGlkU2luY2UgJiZcclxuICAgICAgICBub3cgPD0gdmFsaWRVbnRpbCk7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIHJldHVybnMgaXRzIGlzc3VlZCBhdCB0aW1lIGlmIHZhbGlkLCBudWxsIG90aGVyd2lzZS5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBudWxsIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxudmFyIGlzc3VlZEF0VGltZSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0JykpIHtcclxuICAgICAgICByZXR1cm4gY2xhaW1zWydpYXQnXTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsO1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCBjaGVja3MgdGhlIHZhbGlkaXR5IG9mIGl0cyBmb3JtYXQuIEV4cGVjdHMgYSB2YWxpZCBpc3N1ZWQtYXQgdGltZS5cclxuICpcclxuICogTm90ZXM6XHJcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxudmFyIGlzVmFsaWRGb3JtYXQgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIHZhciBkZWNvZGVkID0gZGVjb2RlKHRva2VuKSwgY2xhaW1zID0gZGVjb2RlZC5jbGFpbXM7XHJcbiAgICByZXR1cm4gISFjbGFpbXMgJiYgdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKTtcclxufTtcclxuLyoqXHJcbiAqIEF0dGVtcHRzIHRvIHBlZXIgaW50byBhbiBhdXRoIHRva2VuIGFuZCBkZXRlcm1pbmUgaWYgaXQncyBhbiBhZG1pbiBhdXRoIHRva2VuIGJ5IGxvb2tpbmcgYXQgdGhlIGNsYWltcyBwb3J0aW9uLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG52YXIgaXNBZG1pbiA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgdmFyIGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltc1snYWRtaW4nXSA9PT0gdHJ1ZTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gY29udGFpbnMob2JqLCBrZXkpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xyXG59XHJcbmZ1bmN0aW9uIHNhZmVHZXQob2JqLCBrZXkpIHtcclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgcmV0dXJuIG9ialtrZXldO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpc0VtcHR5KG9iaikge1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBtYXAob2JqLCBmbiwgY29udGV4dE9iaikge1xyXG4gICAgdmFyIHJlcyA9IHt9O1xyXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJlc1trZXldID0gZm4uY2FsbChjb250ZXh0T2JqLCBvYmpba2V5XSwga2V5LCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXM7XHJcbn1cclxuLyoqXHJcbiAqIERlZXAgZXF1YWwgdHdvIG9iamVjdHMuIFN1cHBvcnQgQXJyYXlzIGFuZCBPYmplY3RzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBhS2V5c18xID0gYUtleXM7IF9pIDwgYUtleXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgayA9IGFLZXlzXzFbX2ldO1xyXG4gICAgICAgIGlmICghYktleXMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYVByb3AgPSBhW2tdO1xyXG4gICAgICAgIHZhciBiUHJvcCA9IGJba107XHJcbiAgICAgICAgaWYgKGlzT2JqZWN0KGFQcm9wKSAmJiBpc09iamVjdChiUHJvcCkpIHtcclxuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwoYVByb3AsIGJQcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFQcm9wICE9PSBiUHJvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2EgPSAwLCBiS2V5c18xID0gYktleXM7IF9hIDwgYktleXNfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICB2YXIgayA9IGJLZXlzXzFbX2FdO1xyXG4gICAgICAgIGlmICghYUtleXMuaW5jbHVkZXMoaykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XHJcbiAgICByZXR1cm4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0JztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogUmV0dXJucyBhIHF1ZXJ5c3RyaW5nLWZvcm1hdHRlZCBzdHJpbmcgKGUuZy4gJmFyZz12YWwmYXJnMj12YWwyKSBmcm9tIGFcclxuICogcGFyYW1zIG9iamVjdCAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICogTm90ZTogWW91IG11c3QgcHJlcGVuZCBpdCB3aXRoID8gd2hlbiBhZGRpbmcgaXQgdG8gYSBVUkwuXHJcbiAqL1xyXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeXN0cmluZ1BhcmFtcykge1xyXG4gICAgdmFyIHBhcmFtcyA9IFtdO1xyXG4gICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChhcnJheVZhbCkge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyYXlWYWwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmVudHJpZXMocXVlcnlzdHJpbmdQYXJhbXMpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBfYiA9IF9hW19pXSwga2V5ID0gX2JbMF0sIHZhbHVlID0gX2JbMV07XHJcbiAgICAgICAgX2xvb3BfMShrZXksIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxyXG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nKSB7XHJcbiAgICB2YXIgb2JqID0ge307XHJcbiAgICB2YXIgdG9rZW5zID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xyXG4gICAgdG9rZW5zLmZvckVhY2goZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRva2VuLnNwbGl0KCc9JyksIGtleSA9IF9hWzBdLCB2YWx1ZSA9IF9hWzFdO1xyXG4gICAgICAgICAgICBvYmpbZGVjb2RlVVJJQ29tcG9uZW50KGtleSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuLyoqXHJcbiAqIEV4dHJhY3QgdGhlIHF1ZXJ5IHN0cmluZyBwYXJ0IG9mIGEgVVJMLCBpbmNsdWRpbmcgdGhlIGxlYWRpbmcgcXVlc3Rpb24gbWFyayAoaWYgcHJlc2VudCkuXHJcbiAqL1xyXG5mdW5jdGlvbiBleHRyYWN0UXVlcnlzdHJpbmcodXJsKSB7XHJcbiAgICB2YXIgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XHJcbiAgICBpZiAoIXF1ZXJ5U3RhcnQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICB2YXIgZnJhZ21lbnRTdGFydCA9IHVybC5pbmRleE9mKCcjJywgcXVlcnlTdGFydCk7XHJcbiAgICByZXR1cm4gdXJsLnN1YnN0cmluZyhxdWVyeVN0YXJ0LCBmcmFnbWVudFN0YXJ0ID4gMCA/IGZyYWdtZW50U3RhcnQgOiB1bmRlZmluZWQpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaC5cclxuICogVmFyaWFibGUgbmFtZXMgZm9sbG93IHRoZSBub3RhdGlvbiBpbiBGSVBTIFBVQiAxODAtMzpcclxuICogaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC0zL2ZpcHMxODAtM19maW5hbC5wZGYuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKiAgIHZhciBzaGExID0gbmV3IHNoYTEoKTtcclxuICogICBzaGExLnVwZGF0ZShieXRlcyk7XHJcbiAqICAgdmFyIGhhc2ggPSBzaGExLmRpZ2VzdCgpO1xyXG4gKlxyXG4gKiBQZXJmb3JtYW5jZTpcclxuICogICBDaHJvbWUgMjM6ICAgfjQwMCBNYml0L3NcclxuICogICBGaXJlZm94IDE2OiAgfjI1MCBNYml0L3NcclxuICpcclxuICovXHJcbi8qKlxyXG4gKiBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2ggY29uc3RydWN0b3IuXHJcbiAqXHJcbiAqIFRoZSBwcm9wZXJ0aWVzIGRlY2xhcmVkIGhlcmUgYXJlIGRpc2N1c3NlZCBpbiB0aGUgYWJvdmUgYWxnb3JpdGhtIGRvY3VtZW50LlxyXG4gKiBAY29uc3RydWN0b3JcclxuICogQGZpbmFsXHJcbiAqIEBzdHJ1Y3RcclxuICovXHJcbnZhciBTaGExID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2hhMSgpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIb2xkcyB0aGUgcHJldmlvdXMgdmFsdWVzIG9mIGFjY3VtdWxhdGVkIHZhcmlhYmxlcyBhLWUgaW4gdGhlIGNvbXByZXNzX1xyXG4gICAgICAgICAqIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFpbl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGJ1ZmZlciBob2xkaW5nIHRoZSBwYXJ0aWFsbHkgY29tcHV0ZWQgaGFzaCByZXN1bHQuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJ1Zl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBvZiA4MCBieXRlcywgZWFjaCBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgaGFzaGVkLiAgUmVmZXJyZWQgdG9cclxuICAgICAgICAgKiBhcyB0aGUgbWVzc2FnZSBzY2hlZHVsZSBpbiB0aGUgZG9jcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuV18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBkYXRhIG5lZWRlZCB0byBwYWQgbWVzc2FnZXMgbGVzcyB0aGFuIDY0IGJ5dGVzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wYWRfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnRvdGFsXyA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSA1MTIgLyA4O1xyXG4gICAgICAgIHRoaXMucGFkX1swXSA9IDEyODtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHRoaXMuYmxvY2tTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWRfW2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgU2hhMS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAweDY3NDUyMzAxO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzFdID0gMHhlZmNkYWI4OTtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9IDB4OThiYWRjZmU7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAweDEwMzI1NDc2O1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzRdID0gMHhjM2QyZTFmMDtcclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgfTtcclxuICAgIC8qKlxyXG4gICAgICogSW50ZXJuYWwgY29tcHJlc3MgaGVscGVyIGZ1bmN0aW9uLlxyXG4gICAgICogQHBhcmFtIGJ1ZiBCbG9jayB0byBjb21wcmVzcy5cclxuICAgICAqIEBwYXJhbSBvZmZzZXQgT2Zmc2V0IG9mIHRoZSBibG9jayBpbiB0aGUgYnVmZmVyLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgU2hhMS5wcm90b3R5cGUuY29tcHJlc3NfID0gZnVuY3Rpb24gKGJ1Ziwgb2Zmc2V0KSB7XHJcbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIFcgPSB0aGlzLldfO1xyXG4gICAgICAgIC8vIGdldCAxNiBiaWcgZW5kaWFuIHdvcmRzXHJcbiAgICAgICAgaWYgKHR5cGVvZiBidWYgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyh1c2VyKTogW2J1ZyA4MTQwMTIyXSBSZWNlbnQgdmVyc2lvbnMgb2YgU2FmYXJpIGZvciBNYWMgT1MgYW5kIGlPU1xyXG4gICAgICAgICAgICAgICAgLy8gaGF2ZSBhIGJ1ZyB0aGF0IHR1cm5zIHRoZSBwb3N0LWluY3JlbWVudCArKyBvcGVyYXRvciBpbnRvIHByZS1pbmNyZW1lbnRcclxuICAgICAgICAgICAgICAgIC8vIGR1cmluZyBKSVQgY29tcGlsYXRpb24uICBXZSBoYXZlIGNvZGUgdGhhdCBkZXBlbmRzIGhlYXZpbHkgb24gU0hBLTEgZm9yXHJcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0bmVzcyBhbmQgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgdGhpcyBidWcsIHNvIEkndmUgcmVtb3ZlZCBhbGwgdXNlc1xyXG4gICAgICAgICAgICAgICAgLy8gb2YgcG9zdC1pbmNyZW1lbnQgKysgaW4gd2hpY2ggdGhlIHJlc3VsdCB2YWx1ZSBpcyB1c2VkLiAgV2UgY2FuIHJldmVydFxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBjaGFuZ2Ugb25jZSB0aGUgU2FmYXJpIGJ1Z1xyXG4gICAgICAgICAgICAgICAgLy8gKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDkwMzYpIGhhcyBiZWVuIGZpeGVkIGFuZFxyXG4gICAgICAgICAgICAgICAgLy8gbW9zdCBjbGllbnRzIGhhdmUgYmVlbiB1cGRhdGVkLlxyXG4gICAgICAgICAgICAgICAgV1tpXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCkgPDwgMjQpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDEpIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAyKSA8PCA4KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDMpO1xyXG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMTY7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgV1tpXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXRdIDw8IDI0KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAyXSA8PCA4KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZltvZmZzZXQgKyAzXTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGV4cGFuZCB0byA4MCB3b3Jkc1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxNjsgaSA8IDgwOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xyXG4gICAgICAgICAgICBXW2ldID0gKCh0IDw8IDEpIHwgKHQgPj4+IDMxKSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYSA9IHRoaXMuY2hhaW5fWzBdO1xyXG4gICAgICAgIHZhciBiID0gdGhpcy5jaGFpbl9bMV07XHJcbiAgICAgICAgdmFyIGMgPSB0aGlzLmNoYWluX1syXTtcclxuICAgICAgICB2YXIgZCA9IHRoaXMuY2hhaW5fWzNdO1xyXG4gICAgICAgIHZhciBlID0gdGhpcy5jaGFpbl9bNF07XHJcbiAgICAgICAgdmFyIGYsIGs7XHJcbiAgICAgICAgLy8gVE9ETyh1c2VyKTogVHJ5IHRvIHVucm9sbCB0aGlzIGxvb3AgdG8gc3BlZWQgdXAgdGhlIGNvbXB1dGF0aW9uLlxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA8IDQwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGQgXiAoYiAmIChjIF4gZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDVhODI3OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gKGIgJiBjKSB8IChkICYgKGIgfCBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4OGYxYmJjZGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweGNhNjJjMWQ2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0ID0gKCgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZiArIGUgKyBrICsgV1tpXSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICBlID0gZDtcclxuICAgICAgICAgICAgZCA9IGM7XHJcbiAgICAgICAgICAgIGMgPSAoKGIgPDwgMzApIHwgKGIgPj4+IDIpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGIgPSBhO1xyXG4gICAgICAgICAgICBhID0gdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAodGhpcy5jaGFpbl9bMF0gKyBhKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMV0gPSAodGhpcy5jaGFpbl9bMV0gKyBiKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAodGhpcy5jaGFpbl9bMl0gKyBjKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAodGhpcy5jaGFpbl9bM10gKyBkKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bNF0gPSAodGhpcy5jaGFpbl9bNF0gKyBlKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICB9O1xyXG4gICAgU2hhMS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGJ5dGVzLCBsZW5ndGgpIHtcclxuICAgICAgICAvLyBUT0RPKGpvaG5sZW56KTogdGlnaHRlbiB0aGUgZnVuY3Rpb24gc2lnbmF0dXJlIGFuZCByZW1vdmUgdGhpcyBjaGVja1xyXG4gICAgICAgIGlmIChieXRlcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGxlbmd0aCA9IGJ5dGVzLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGxlbmd0aE1pbnVzQmxvY2sgPSBsZW5ndGggLSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICB2YXIgbiA9IDA7XHJcbiAgICAgICAgLy8gVXNpbmcgbG9jYWwgaW5zdGVhZCBvZiBtZW1iZXIgdmFyaWFibGVzIGdpdmVzIH41JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYuXHJcbiAgICAgICAgdmFyIGJ1ZiA9IHRoaXMuYnVmXztcclxuICAgICAgICB2YXIgaW5idWYgPSB0aGlzLmluYnVmXztcclxuICAgICAgICAvLyBUaGUgb3V0ZXIgd2hpbGUgbG9vcCBzaG91bGQgZXhlY3V0ZSBhdCBtb3N0IHR3aWNlLlxyXG4gICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgaGF2ZSBubyBkYXRhIGluIHRoZSBibG9jayB0byB0b3AgdXAsIHdlIGNhbiBkaXJlY3RseSBwcm9jZXNzIHRoZVxyXG4gICAgICAgICAgICAvLyBpbnB1dCBidWZmZXIgKGFzc3VtaW5nIGl0IGNvbnRhaW5zIHN1ZmZpY2llbnQgZGF0YSkuIFRoaXMgZ2l2ZXMgfjI1JVxyXG4gICAgICAgICAgICAvLyBzcGVlZHVwIG9uIENocm9tZSAyMyBhbmQgfjE1JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYsIGJ1dCByZXF1aXJlcyB0aGF0XHJcbiAgICAgICAgICAgIC8vIHRoZSBkYXRhIGlzIHByb3ZpZGVkIGluIGxhcmdlIGNodW5rcyAob3IgaW4gbXVsdGlwbGVzIG9mIDY0IGJ5dGVzKS5cclxuICAgICAgICAgICAgaWYgKGluYnVmID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8PSBsZW5ndGhNaW51c0Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wcmVzc18oYnl0ZXMsIG4pO1xyXG4gICAgICAgICAgICAgICAgICAgIG4gKz0gdGhpcy5ibG9ja1NpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBieXRlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnVmW2luYnVmXSA9IGJ5dGVzLmNoYXJDb2RlQXQobik7XHJcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXNbbl07XHJcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcclxuICAgICAgICAgICAgICAgICAgICArK247XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluYnVmID09PSB0aGlzLmJsb2NrU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gdGhlIG91dGVyIGxvb3Agc28gd2UgdXNlIHRoZSBmdWxsLWJsb2NrIG9wdGltaXphdGlvbi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5idWZfID0gaW5idWY7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gKz0gbGVuZ3RoO1xyXG4gICAgfTtcclxuICAgIC8qKiBAb3ZlcnJpZGUgKi9cclxuICAgIFNoYTEucHJvdG90eXBlLmRpZ2VzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGlnZXN0ID0gW107XHJcbiAgICAgICAgdmFyIHRvdGFsQml0cyA9IHRoaXMudG90YWxfICogODtcclxuICAgICAgICAvLyBBZGQgcGFkIDB4ODAgMHgwMCouXHJcbiAgICAgICAgaWYgKHRoaXMuaW5idWZfIDwgNTYpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCA1NiAtIHRoaXMuaW5idWZfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgIyBiaXRzLlxyXG4gICAgICAgIGZvciAodmFyIGkgPSB0aGlzLmJsb2NrU2l6ZSAtIDE7IGkgPj0gNTY7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1Zl9baV0gPSB0b3RhbEJpdHMgJiAyNTU7XHJcbiAgICAgICAgICAgIHRvdGFsQml0cyAvPSAyNTY7IC8vIERvbid0IHVzZSBiaXQtc2hpZnRpbmcgaGVyZSFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wcmVzc18odGhpcy5idWZfKTtcclxuICAgICAgICB2YXIgbiA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDI0OyBqID49IDA7IGogLT0gOCkge1xyXG4gICAgICAgICAgICAgICAgZGlnZXN0W25dID0gKHRoaXMuY2hhaW5fW2ldID4+IGopICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgKytuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWdlc3Q7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNoYTE7XHJcbn0oKSk7XG5cbi8qKlxyXG4gKiBIZWxwZXIgdG8gbWFrZSBhIFN1YnNjcmliZSBmdW5jdGlvbiAoanVzdCBsaWtlIFByb21pc2UgaGVscHMgbWFrZSBhXHJcbiAqIFRoZW5hYmxlKS5cclxuICpcclxuICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXHJcbiAqICAgICBhcyBhIHByb3h5LlxyXG4gKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmUoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpIHtcclxuICAgIHZhciBwcm94eSA9IG5ldyBPYnNlcnZlclByb3h5KGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKTtcclxuICAgIHJldHVybiBwcm94eS5zdWJzY3JpYmUuYmluZChwcm94eSk7XHJcbn1cclxuLyoqXHJcbiAqIEltcGxlbWVudCBmYW4tb3V0IGZvciBhbnkgbnVtYmVyIG9mIE9ic2VydmVycyBhdHRhY2hlZCB2aWEgYSBzdWJzY3JpYmVcclxuICogZnVuY3Rpb24uXHJcbiAqL1xyXG52YXIgT2JzZXJ2ZXJQcm94eSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXHJcbiAgICAgKiAgICAgYXMgYSBwcm94eS5cclxuICAgICAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gT2JzZXJ2ZXJQcm94eShleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gTWljcm8tdGFzayBzY2hlZHVsaW5nIGJ5IGNhbGxpbmcgdGFzay50aGVuKCkuXHJcbiAgICAgICAgdGhpcy50YXNrID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSBvbk5vT2JzZXJ2ZXJzO1xyXG4gICAgICAgIC8vIENhbGwgdGhlIGV4ZWN1dG9yIGFzeW5jaHJvbm91c2x5IHNvIHN1YnNjcmliZXJzIHRoYXQgYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJzY3JpYmUgZnVuY3Rpb25cclxuICAgICAgICAvLyBjYW4gc3RpbGwgcmVjZWl2ZSB0aGUgdmVyeSBmaXJzdCB2YWx1ZSBnZW5lcmF0ZWQgaW4gdGhlIGV4ZWN1dG9yLlxyXG4gICAgICAgIHRoaXMudGFza1xyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGV4ZWN1dG9yKF90aGlzKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgX3RoaXMuZXJyb3IoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQodmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsb3NlKGVycm9yKTtcclxuICAgIH07XHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBTdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgYW4gT2JzZXJ2ZXIgdG8gdGhlIGZhbi1vdXQgbGlzdC5cclxuICAgICAqXHJcbiAgICAgKiAtIFdlIHJlcXVpcmUgdGhhdCBubyBldmVudCBpcyBzZW50IHRvIGEgc3Vic2NyaWJlciBzeWNocm9ub3VzbHkgdG8gdGhlaXJcclxuICAgICAqICAgY2FsbCB0byBzdWJzY3JpYmUoKS5cclxuICAgICAqL1xyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBvYnNlcnZlcjtcclxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBlcnJvciA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9ic2VydmVyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBc3NlbWJsZSBhbiBPYnNlcnZlciBvYmplY3Qgd2hlbiBwYXNzZWQgYXMgY2FsbGJhY2sgZnVuY3Rpb25zLlxyXG4gICAgICAgIGlmIChpbXBsZW1lbnRzQW55TWV0aG9kcyhuZXh0T3JPYnNlcnZlciwgW1xyXG4gICAgICAgICAgICAnbmV4dCcsXHJcbiAgICAgICAgICAgICdlcnJvcicsXHJcbiAgICAgICAgICAgICdjb21wbGV0ZSdcclxuICAgICAgICBdKSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBuZXh0T3JPYnNlcnZlcixcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvcixcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvciA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHVuc3ViID0gdGhpcy51bnN1YnNjcmliZU9uZS5iaW5kKHRoaXMsIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBzdWJzY3JpYmUgdG8gYSB0ZXJtaW5hdGVkIE9ic2VydmFibGUgLSB3ZVxyXG4gICAgICAgIC8vIGp1c3QgcmVzcG9uZCB0byB0aGUgT2JzZXJ2ZXIgd2l0aCB0aGUgZmluYWwgZXJyb3Igb3IgY29tcGxldGVcclxuICAgICAgICAvLyBldmVudC5cclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICB0aGlzLnRhc2sudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfdGhpcy5maW5hbEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKF90aGlzLmZpbmFsRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdGhpbmdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xyXG4gICAgICAgIHJldHVybiB1bnN1YjtcclxuICAgIH07XHJcbiAgICAvLyBVbnN1YnNjcmliZSBpcyBzeW5jaHJvbm91cyAtIHdlIGd1YXJhbnRlZSB0aGF0IG5vIGV2ZW50cyBhcmUgc2VudCB0b1xyXG4gICAgLy8gYW55IHVuc3Vic2NyaWJlZCBPYnNlcnZlci5cclxuICAgIE9ic2VydmVyUHJveHkucHJvdG90eXBlLnVuc3Vic2NyaWJlT25lID0gZnVuY3Rpb24gKGkpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9ic2VydmVyc1tpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2ldO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyQ291bnQgPT09IDAgJiYgdGhpcy5vbk5vT2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5mb3JFYWNoT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gQWxyZWFkeSBjbG9zZWQgYnkgcHJldmlvdXMgZXZlbnQuLi4uanVzdCBlYXQgdGhlIGFkZGl0aW9uYWwgdmFsdWVzLlxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNpbmNlIHNlbmRPbmUgY2FsbHMgYXN5bmNocm9ub3VzbHkgLSB0aGVyZSBpcyBubyBjaGFuY2UgdGhhdFxyXG4gICAgICAgIC8vIHRoaXMub2JzZXJ2ZXJzIHdpbGwgYmVjb21lIHVuZGVmaW5lZC5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JzZXJ2ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIC8vIENhbGwgdGhlIE9ic2VydmVyIHZpYSBvbmUgb2YgaXQncyBjYWxsYmFjayBmdW5jdGlvbi4gV2UgYXJlIGNhcmVmdWwgdG9cclxuICAgIC8vIGNvbmZpcm0gdGhhdCB0aGUgb2JzZXJ2ZSBoYXMgbm90IGJlZW4gdW5zdWJzY3JpYmVkIHNpbmNlIHRoaXMgYXN5bmNocm9ub3VzXHJcbiAgICAvLyBmdW5jdGlvbiBoYWQgYmVlbiBxdWV1ZWQuXHJcbiAgICBPYnNlcnZlclByb3h5LnByb3RvdHlwZS5zZW5kT25lID0gZnVuY3Rpb24gKGksIGZuKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyBFeGVjdXRlIHRoZSBjYWxsYmFjayBhc3luY2hyb25vdXNseVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcclxuICAgICAgICB0aGlzLnRhc2sudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5vYnNlcnZlcnMgIT09IHVuZGVmaW5lZCAmJiBfdGhpcy5vYnNlcnZlcnNbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBmbihfdGhpcy5vYnNlcnZlcnNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9ucyByYWlzZWQgaW4gT2JzZXJ2ZXJzIG9yIG1pc3NpbmcgbWV0aG9kcyBvZiBhblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ic2VydmVyLlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIExvZyBlcnJvciB0byBjb25zb2xlLiBiLzMxNDA0ODA2XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgT2JzZXJ2ZXJQcm94eS5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbmFsaXplZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKGVyciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluYWxFcnJvciA9IGVycjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBfdGhpcy5vbk5vT2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBPYnNlcnZlclByb3h5O1xyXG59KCkpO1xyXG4vKiogVHVybiBzeW5jaHJvbm91cyBmdW5jdGlvbiBpbnRvIG9uZSBjYWxsZWQgYXN5bmNocm9ub3VzbHkuICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmZ1bmN0aW9uIGFzeW5jKGZuLCBvbkVycm9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmbi5hcHBseSh2b2lkIDAsIGFyZ3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgb2JqZWN0IHBhc3NlZCBpbiBpbXBsZW1lbnRzIGFueSBvZiB0aGUgbmFtZWQgbWV0aG9kcy5cclxuICovXHJcbmZ1bmN0aW9uIGltcGxlbWVudHNBbnlNZXRob2RzKG9iaiwgbWV0aG9kcykge1xyXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIF9pID0gMCwgbWV0aG9kc18xID0gbWV0aG9kczsgX2kgPCBtZXRob2RzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IG1ldGhvZHNfMVtfaV07XHJcbiAgICAgICAgaWYgKG1ldGhvZCBpbiBvYmogJiYgdHlwZW9mIG9ialttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBub29wKCkge1xyXG4gICAgLy8gZG8gbm90aGluZ1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBDaGVjayB0byBtYWtlIHN1cmUgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHByb3ZpZGVkIGZvciBhIHB1YmxpYyBmdW5jdGlvbi5cclxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZm5OYW1lIFRoZSBmdW5jdGlvbiBuYW1lXHJcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gbWF4Q291bnQgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50IHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxyXG4gKiBAcGFyYW0gYXJnQ291bnQgVGhlIGFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIHByb3ZpZGVkLlxyXG4gKi9cclxudmFyIHZhbGlkYXRlQXJnQ291bnQgPSBmdW5jdGlvbiAoZm5OYW1lLCBtaW5Db3VudCwgbWF4Q291bnQsIGFyZ0NvdW50KSB7XHJcbiAgICB2YXIgYXJnRXJyb3I7XHJcbiAgICBpZiAoYXJnQ291bnQgPCBtaW5Db3VudCkge1xyXG4gICAgICAgIGFyZ0Vycm9yID0gJ2F0IGxlYXN0ICcgKyBtaW5Db3VudDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFyZ0NvdW50ID4gbWF4Q291bnQpIHtcclxuICAgICAgICBhcmdFcnJvciA9IG1heENvdW50ID09PSAwID8gJ25vbmUnIDogJ25vIG1vcmUgdGhhbiAnICsgbWF4Q291bnQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYXJnRXJyb3IpIHtcclxuICAgICAgICB2YXIgZXJyb3IgPSBmbk5hbWUgK1xyXG4gICAgICAgICAgICAnIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoICcgK1xyXG4gICAgICAgICAgICBhcmdDb3VudCArXHJcbiAgICAgICAgICAgIChhcmdDb3VudCA9PT0gMSA/ICcgYXJndW1lbnQuJyA6ICcgYXJndW1lbnRzLicpICtcclxuICAgICAgICAgICAgJyBFeHBlY3RzICcgK1xyXG4gICAgICAgICAgICBhcmdFcnJvciArXHJcbiAgICAgICAgICAgICcuJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHRvIHByZWZpeCBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGZhaWxlZCBhcmd1bWVudCB2YWxpZGF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIGFyZ05hbWUgVGhlIG5hbWUgb2YgdGhlIGFyZ3VtZW50XHJcbiAqIEByZXR1cm4gVGhlIHByZWZpeCB0byBhZGQgdG8gdGhlIGVycm9yIHRocm93biBmb3IgdmFsaWRhdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGVycm9yUHJlZml4KGZuTmFtZSwgYXJnTmFtZSkge1xyXG4gICAgcmV0dXJuIGZuTmFtZSArIFwiIGZhaWxlZDogXCIgKyBhcmdOYW1lICsgXCIgYXJndW1lbnQgXCI7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBmbk5hbWVcclxuICogQHBhcmFtIGFyZ3VtZW50TnVtYmVyXHJcbiAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICogQHBhcmFtIG9wdGlvbmFsXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWVzcGFjZShmbk5hbWUsIG5hbWVzcGFjZSwgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy9UT0RPOiBJIHNob3VsZCBkbyBtb3JlIHZhbGlkYXRpb24gaGVyZS4gV2Ugb25seSBhbGxvdyBjZXJ0YWluIGNoYXJzIGluIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgJ25hbWVzcGFjZScpICsgJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBuYW1lc3BhY2UuJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDYWxsYmFjayhmbk5hbWUsIGFyZ3VtZW50TmFtZSwgXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmNhbGxiYWNrLCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi4nKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRPYmplY3QoZm5OYW1lLCBhcmd1bWVudE5hbWUsIGNvbnRleHQsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBjb250ZXh0IG9iamVjdC4nKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBDb2RlIG9yaWdpbmFsbHkgY2FtZSBmcm9tIGdvb2cuY3J5cHQuc3RyaW5nVG9VdGY4Qnl0ZUFycmF5LCBidXQgZm9yIHNvbWUgcmVhc29uIHRoZXlcclxuLy8gYXV0b21hdGljYWxseSByZXBsYWNlZCAnXFxyXFxuJyB3aXRoICdcXG4nLCBhbmQgdGhleSBkaWRuJ3QgaGFuZGxlIHN1cnJvZ2F0ZSBwYWlycyxcclxuLy8gc28gaXQncyBiZWVuIG1vZGlmaWVkLlxyXG4vLyBOb3RlIHRoYXQgbm90IGFsbCBVbmljb2RlIGNoYXJhY3RlcnMgYXBwZWFyIGFzIHNpbmdsZSBjaGFyYWN0ZXJzIGluIEphdmFTY3JpcHQgc3RyaW5ncy5cclxuLy8gZnJvbUNoYXJDb2RlIHJldHVybnMgdGhlIFVURi0xNiBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciAtIHNvIHNvbWUgVW5pY29kZSBjaGFyYWN0ZXJzXHJcbi8vIHVzZSAyIGNoYXJhY3RlcnMgaW4gSmF2YXNjcmlwdC4gIEFsbCA0LWJ5dGUgVVRGLTggY2hhcmFjdGVycyBiZWdpbiB3aXRoIGEgZmlyc3RcclxuLy8gY2hhcmFjdGVyIGluIHRoZSByYW5nZSAweEQ4MDAgLSAweERCRkYgKHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzby1jYWxsZWQgc3Vycm9nYXRlXHJcbi8vIHBhaXIpLlxyXG4vLyBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjEuM1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICovXHJcbnZhciBzdHJpbmdUb0J5dGVBcnJheSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIHZhciBvdXQgPSBbXTtcclxuICAgIHZhciBwID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICAvLyBJcyB0aGlzIHRoZSBsZWFkIHN1cnJvZ2F0ZSBpbiBhIHN1cnJvZ2F0ZSBwYWlyP1xyXG4gICAgICAgIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xyXG4gICAgICAgICAgICB2YXIgaGlnaCA9IGMgLSAweGQ4MDA7IC8vIHRoZSBoaWdoIDEwIGJpdHMuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgYXNzZXJ0KGkgPCBzdHIubGVuZ3RoLCAnU3Vycm9nYXRlIHBhaXIgbWlzc2luZyB0cmFpbCBzdXJyb2dhdGUuJyk7XHJcbiAgICAgICAgICAgIHZhciBsb3cgPSBzdHIuY2hhckNvZGVBdChpKSAtIDB4ZGMwMDsgLy8gdGhlIGxvdyAxMCBiaXRzLlxyXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArIChoaWdoIDw8IDEwKSArIGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGMgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgMjA0OCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjIDwgNjU1MzYpIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDEyKSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dDtcclxufTtcclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBsZW5ndGggd2l0aG91dCBhY3R1YWxseSBjb252ZXJ0aW5nOyB1c2VmdWwgZm9yIGRvaW5nIGNoZWFwZXIgdmFsaWRhdGlvbi5cclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtudW1iZXJ9XHJcbiAqL1xyXG52YXIgc3RyaW5nTGVuZ3RoID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgdmFyIHAgPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YXIgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIHArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgcCArPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xyXG4gICAgICAgICAgICAvLyBMZWFkIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyLiAgVGhlIHBhaXIgdG9nZXRoZXIgd2lsbCB0YWtlIDQgYnl0ZXMgdG8gcmVwcmVzZW50LlxyXG4gICAgICAgICAgICBwICs9IDQ7XHJcbiAgICAgICAgICAgIGkrKzsgLy8gc2tpcCB0cmFpbCBzdXJyb2dhdGUuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHA7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBleHBvbmVudGlhbGx5IGluY3JlYXNlLlxyXG4gKi9cclxudmFyIERFRkFVTFRfSU5URVJWQUxfTUlMTElTID0gMTAwMDtcclxuLyoqXHJcbiAqIFRoZSBmYWN0b3IgdG8gYmFja29mZiBieS5cclxuICogU2hvdWxkIGJlIGEgbnVtYmVyIGdyZWF0ZXIgdGhhbiAxLlxyXG4gKi9cclxudmFyIERFRkFVTFRfQkFDS09GRl9GQUNUT1IgPSAyO1xyXG4vKipcclxuICogVGhlIG1heGltdW0gbWlsbGlzZWNvbmRzIHRvIGluY3JlYXNlIHRvLlxyXG4gKlxyXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXHJcbiAqL1xyXG52YXIgTUFYX1ZBTFVFX01JTExJUyA9IDQgKiA2MCAqIDYwICogMTAwMDsgLy8gRm91ciBob3VycywgbGlrZSBpT1MgYW5kIEFuZHJvaWQuXHJcbi8qKlxyXG4gKiBUaGUgcGVyY2VudGFnZSBvZiBiYWNrb2ZmIHRpbWUgdG8gcmFuZG9taXplIGJ5LlxyXG4gKiBTZWVcclxuICogaHR0cDovL2dvL3NhZmUtY2xpZW50LWJlaGF2aW9yI3N0ZXAtMS1kZXRlcm1pbmUtdGhlLWFwcHJvcHJpYXRlLXJldHJ5LWludGVydmFsLXRvLWhhbmRsZS1zcGlrZS10cmFmZmljXHJcbiAqIGZvciBjb250ZXh0LlxyXG4gKlxyXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXHJcbiAqL1xyXG52YXIgUkFORE9NX0ZBQ1RPUiA9IDAuNTtcclxuLyoqXHJcbiAqIEJhc2VkIG9uIHRoZSBiYWNrb2ZmIG1ldGhvZCBmcm9tXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1saWJyYXJ5L2Jsb2IvbWFzdGVyL2Nsb3N1cmUvZ29vZy9tYXRoL2V4cG9uZW50aWFsYmFja29mZi5qcy5cclxuICogRXh0cmFjdGVkIGhlcmUgc28gd2UgZG9uJ3QgbmVlZCB0byBwYXNzIG1ldGFkYXRhIGFuZCBhIHN0YXRlZnVsIEV4cG9uZW50aWFsQmFja29mZiBvYmplY3QgYXJvdW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhiYWNrb2ZmQ291bnQsIGludGVydmFsTWlsbGlzLCBiYWNrb2ZmRmFjdG9yKSB7XHJcbiAgICBpZiAoaW50ZXJ2YWxNaWxsaXMgPT09IHZvaWQgMCkgeyBpbnRlcnZhbE1pbGxpcyA9IERFRkFVTFRfSU5URVJWQUxfTUlMTElTOyB9XHJcbiAgICBpZiAoYmFja29mZkZhY3RvciA9PT0gdm9pZCAwKSB7IGJhY2tvZmZGYWN0b3IgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SOyB9XHJcbiAgICAvLyBDYWxjdWxhdGVzIGFuIGV4cG9uZW50aWFsbHkgaW5jcmVhc2luZyB2YWx1ZS5cclxuICAgIC8vIERldmlhdGlvbjogY2FsY3VsYXRlcyB2YWx1ZSBmcm9tIGNvdW50IGFuZCBhIGNvbnN0YW50IGludGVydmFsLCBzbyB3ZSBvbmx5IG5lZWQgdG8gc2F2ZSB2YWx1ZVxyXG4gICAgLy8gYW5kIGNvdW50IHRvIHJlc3RvcmUgc3RhdGUuXHJcbiAgICB2YXIgY3VyckJhc2VWYWx1ZSA9IGludGVydmFsTWlsbGlzICogTWF0aC5wb3coYmFja29mZkZhY3RvciwgYmFja29mZkNvdW50KTtcclxuICAgIC8vIEEgcmFuZG9tIFwiZnV6elwiIHRvIGF2b2lkIHdhdmVzIG9mIHJldHJpZXMuXHJcbiAgICAvLyBEZXZpYXRpb246IHJhbmRvbUZhY3RvciBpcyByZXF1aXJlZC5cclxuICAgIHZhciByYW5kb21XYWl0ID0gTWF0aC5yb3VuZChcclxuICAgIC8vIEEgZnJhY3Rpb24gb2YgdGhlIGJhY2tvZmYgdmFsdWUgdG8gYWRkL3N1YnRyYWN0LlxyXG4gICAgLy8gRGV2aWF0aW9uOiBjaGFuZ2VzIG11bHRpcGxpY2F0aW9uIG9yZGVyIHRvIGltcHJvdmUgcmVhZGFiaWxpdHkuXHJcbiAgICBSQU5ET01fRkFDVE9SICpcclxuICAgICAgICBjdXJyQmFzZVZhbHVlICpcclxuICAgICAgICAvLyBBIHJhbmRvbSBmbG9hdCAocm91bmRlZCB0byBpbnQgYnkgTWF0aC5yb3VuZCBhYm92ZSkgaW4gdGhlIHJhbmdlIFstMSwgMV0uIERldGVybWluZXNcclxuICAgICAgICAvLyBpZiB3ZSBhZGQgb3Igc3VidHJhY3QuXHJcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICpcclxuICAgICAgICAyKTtcclxuICAgIC8vIExpbWl0cyBiYWNrb2ZmIHRvIG1heCB0byBhdm9pZCBlZmZlY3RpdmVseSBwZXJtYW5lbnQgYmFja29mZi5cclxuICAgIHJldHVybiBNYXRoLm1pbihNQVhfVkFMVUVfTUlMTElTLCBjdXJyQmFzZVZhbHVlICsgcmFuZG9tV2FpdCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGUgRW5nbGlzaCBvcmRpbmFsIGxldHRlcnMgYWZ0ZXIgYSBudW1iZXJcclxuICovXHJcbmZ1bmN0aW9uIG9yZGluYWwoaSkge1xyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaSkpIHtcclxuICAgICAgICByZXR1cm4gXCJcIiArIGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaSArIGluZGljYXRvcihpKTtcclxufVxyXG5mdW5jdGlvbiBpbmRpY2F0b3IoaSkge1xyXG4gICAgaSA9IE1hdGguYWJzKGkpO1xyXG4gICAgdmFyIGNlbnQgPSBpICUgMTAwO1xyXG4gICAgaWYgKGNlbnQgPj0gMTAgJiYgY2VudCA8PSAyMCkge1xyXG4gICAgICAgIHJldHVybiAndGgnO1xyXG4gICAgfVxyXG4gICAgdmFyIGRlYyA9IGkgJSAxMDtcclxuICAgIGlmIChkZWMgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gJ3N0JztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ25kJztcclxuICAgIH1cclxuICAgIGlmIChkZWMgPT09IDMpIHtcclxuICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgIH1cclxuICAgIHJldHVybiAndGgnO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGdldE1vZHVsYXJJbnN0YW5jZShzZXJ2aWNlKSB7XHJcbiAgICBpZiAoc2VydmljZSAmJiBzZXJ2aWNlLl9kZWxlZ2F0ZSkge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlLl9kZWxlZ2F0ZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IENPTlNUQU5UUywgRGVmZXJyZWQsIEVycm9yRmFjdG9yeSwgRmlyZWJhc2VFcnJvciwgTUFYX1ZBTFVFX01JTExJUywgUkFORE9NX0ZBQ1RPUiwgU2hhMSwgYXJlQ29va2llc0VuYWJsZWQsIGFzc2VydCwgYXNzZXJ0aW9uRXJyb3IsIGFzeW5jLCBiYXNlNjQsIGJhc2U2NERlY29kZSwgYmFzZTY0RW5jb2RlLCBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZywgY2FsY3VsYXRlQmFja29mZk1pbGxpcywgY29udGFpbnMsIGNyZWF0ZU1vY2tVc2VyVG9rZW4sIGNyZWF0ZVN1YnNjcmliZSwgZGVjb2RlLCBkZWVwQ29weSwgZGVlcEVxdWFsLCBkZWVwRXh0ZW5kLCBlcnJvclByZWZpeCwgZXh0cmFjdFF1ZXJ5c3RyaW5nLCBnZXRHbG9iYWwsIGdldE1vZHVsYXJJbnN0YW5jZSwgZ2V0VUEsIGlzQWRtaW4sIGlzQnJvd3NlciwgaXNCcm93c2VyRXh0ZW5zaW9uLCBpc0VsZWN0cm9uLCBpc0VtcHR5LCBpc0lFLCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgaXNNb2JpbGVDb3Jkb3ZhLCBpc05vZGUsIGlzTm9kZVNkaywgaXNSZWFjdE5hdGl2ZSwgaXNTYWZhcmksIGlzVVdQLCBpc1ZhbGlkRm9ybWF0LCBpc1ZhbGlkVGltZXN0YW1wLCBpc3N1ZWRBdFRpbWUsIGpzb25FdmFsLCBtYXAsIG9yZGluYWwsIHF1ZXJ5c3RyaW5nLCBxdWVyeXN0cmluZ0RlY29kZSwgc2FmZUdldCwgc3RyaW5nTGVuZ3RoLCBzdHJpbmdUb0J5dGVBcnJheSwgc3RyaW5naWZ5LCB2YWxpZGF0ZUFyZ0NvdW50LCB2YWxpZGF0ZUNhbGxiYWNrLCB2YWxpZGF0ZUNvbnRleHRPYmplY3QsIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUsIHZhbGlkYXRlTmFtZXNwYWNlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyByZWdpc3RlclZlcnNpb24gfSBmcm9tICdAZmlyZWJhc2UvYXBwJztcbmV4cG9ydCAqIGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuXG52YXIgbmFtZSA9IFwiZmlyZWJhc2VcIjtcbnZhciB2ZXJzaW9uID0gXCI5LjAuMlwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2FwcCcpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL21lc3NhZ2luZy9zdyc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBmYWN0b3J5KGV4cG9ydHMpIDpcbiAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KSA6XG4gIChnbG9iYWwgPSBnbG9iYWwgfHwgc2VsZiwgZmFjdG9yeShnbG9iYWwuaWRiID0ge30pKTtcbn0odGhpcywgZnVuY3Rpb24gKGV4cG9ydHMpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gIGZ1bmN0aW9uIHRvQXJyYXkoYXJyKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlcXVlc3QucmVzdWx0KTtcbiAgICAgIH07XG5cbiAgICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvbWlzaWZ5UmVxdWVzdENhbGwob2JqLCBtZXRob2QsIGFyZ3MpIHtcbiAgICB2YXIgcmVxdWVzdDtcbiAgICB2YXIgcCA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVxdWVzdCA9IG9ialttZXRob2RdLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcblxuICAgIHAucmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgcmV0dXJuIHA7XG4gIH1cblxuICBmdW5jdGlvbiBwcm9taXNpZnlDdXJzb3JSZXF1ZXN0Q2FsbChvYmosIG1ldGhvZCwgYXJncykge1xuICAgIHZhciBwID0gcHJvbWlzaWZ5UmVxdWVzdENhbGwob2JqLCBtZXRob2QsIGFyZ3MpO1xuICAgIHJldHVybiBwLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgIHJldHVybiBuZXcgQ3Vyc29yKHZhbHVlLCBwLnJlcXVlc3QpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHlQcm9wZXJ0aWVzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIHByb3BlcnRpZXMpIHtcbiAgICBwcm9wZXJ0aWVzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFByb3h5Q2xhc3MucHJvdG90eXBlLCBwcm9wLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0UHJvcF1bcHJvcF07XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgdGhpc1t0YXJnZXRQcm9wXVtwcm9wXSA9IHZhbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eVJlcXVlc3RNZXRob2RzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIENvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmICghKHByb3AgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuICAgICAgUHJveHlDbGFzcy5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3RDYWxsKHRoaXNbdGFyZ2V0UHJvcF0sIHByb3AsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcHJveHlNZXRob2RzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIENvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmICghKHByb3AgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuICAgICAgUHJveHlDbGFzcy5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbdGFyZ2V0UHJvcF1bcHJvcF0uYXBwbHkodGhpc1t0YXJnZXRQcm9wXSwgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwcm94eUN1cnNvclJlcXVlc3RNZXRob2RzKFByb3h5Q2xhc3MsIHRhcmdldFByb3AsIENvbnN0cnVjdG9yLCBwcm9wZXJ0aWVzKSB7XG4gICAgcHJvcGVydGllcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgIGlmICghKHByb3AgaW4gQ29uc3RydWN0b3IucHJvdG90eXBlKSkgcmV0dXJuO1xuICAgICAgUHJveHlDbGFzcy5wcm90b3R5cGVbcHJvcF0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeUN1cnNvclJlcXVlc3RDYWxsKHRoaXNbdGFyZ2V0UHJvcF0sIHByb3AsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gSW5kZXgoaW5kZXgpIHtcbiAgICB0aGlzLl9pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHJveHlQcm9wZXJ0aWVzKEluZGV4LCAnX2luZGV4JywgW1xuICAgICduYW1lJyxcbiAgICAna2V5UGF0aCcsXG4gICAgJ211bHRpRW50cnknLFxuICAgICd1bmlxdWUnXG4gIF0pO1xuXG4gIHByb3h5UmVxdWVzdE1ldGhvZHMoSW5kZXgsICdfaW5kZXgnLCBJREJJbmRleCwgW1xuICAgICdnZXQnLFxuICAgICdnZXRLZXknLFxuICAgICdnZXRBbGwnLFxuICAgICdnZXRBbGxLZXlzJyxcbiAgICAnY291bnQnXG4gIF0pO1xuXG4gIHByb3h5Q3Vyc29yUmVxdWVzdE1ldGhvZHMoSW5kZXgsICdfaW5kZXgnLCBJREJJbmRleCwgW1xuICAgICdvcGVuQ3Vyc29yJyxcbiAgICAnb3BlbktleUN1cnNvcidcbiAgXSk7XG5cbiAgZnVuY3Rpb24gQ3Vyc29yKGN1cnNvciwgcmVxdWVzdCkge1xuICAgIHRoaXMuX2N1cnNvciA9IGN1cnNvcjtcbiAgICB0aGlzLl9yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgfVxuXG4gIHByb3h5UHJvcGVydGllcyhDdXJzb3IsICdfY3Vyc29yJywgW1xuICAgICdkaXJlY3Rpb24nLFxuICAgICdrZXknLFxuICAgICdwcmltYXJ5S2V5JyxcbiAgICAndmFsdWUnXG4gIF0pO1xuXG4gIHByb3h5UmVxdWVzdE1ldGhvZHMoQ3Vyc29yLCAnX2N1cnNvcicsIElEQkN1cnNvciwgW1xuICAgICd1cGRhdGUnLFxuICAgICdkZWxldGUnXG4gIF0pO1xuXG4gIC8vIHByb3h5ICduZXh0JyBtZXRob2RzXG4gIFsnYWR2YW5jZScsICdjb250aW51ZScsICdjb250aW51ZVByaW1hcnlLZXknXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZE5hbWUpIHtcbiAgICBpZiAoIShtZXRob2ROYW1lIGluIElEQkN1cnNvci5wcm90b3R5cGUpKSByZXR1cm47XG4gICAgQ3Vyc29yLnByb3RvdHlwZVttZXRob2ROYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGN1cnNvciA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBjdXJzb3IuX2N1cnNvclttZXRob2ROYW1lXS5hcHBseShjdXJzb3IuX2N1cnNvciwgYXJncyk7XG4gICAgICAgIHJldHVybiBwcm9taXNpZnlSZXF1ZXN0KGN1cnNvci5fcmVxdWVzdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGlmICghdmFsdWUpIHJldHVybjtcbiAgICAgICAgICByZXR1cm4gbmV3IEN1cnNvcih2YWx1ZSwgY3Vyc29yLl9yZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBPYmplY3RTdG9yZShzdG9yZSkge1xuICAgIHRoaXMuX3N0b3JlID0gc3RvcmU7XG4gIH1cblxuICBPYmplY3RTdG9yZS5wcm90b3R5cGUuY3JlYXRlSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEluZGV4KHRoaXMuX3N0b3JlLmNyZWF0ZUluZGV4LmFwcGx5KHRoaXMuX3N0b3JlLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBPYmplY3RTdG9yZS5wcm90b3R5cGUuaW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IEluZGV4KHRoaXMuX3N0b3JlLmluZGV4LmFwcGx5KHRoaXMuX3N0b3JlLCBhcmd1bWVudHMpKTtcbiAgfTtcblxuICBwcm94eVByb3BlcnRpZXMoT2JqZWN0U3RvcmUsICdfc3RvcmUnLCBbXG4gICAgJ25hbWUnLFxuICAgICdrZXlQYXRoJyxcbiAgICAnaW5kZXhOYW1lcycsXG4gICAgJ2F1dG9JbmNyZW1lbnQnXG4gIF0pO1xuXG4gIHByb3h5UmVxdWVzdE1ldGhvZHMoT2JqZWN0U3RvcmUsICdfc3RvcmUnLCBJREJPYmplY3RTdG9yZSwgW1xuICAgICdwdXQnLFxuICAgICdhZGQnLFxuICAgICdkZWxldGUnLFxuICAgICdjbGVhcicsXG4gICAgJ2dldCcsXG4gICAgJ2dldEFsbCcsXG4gICAgJ2dldEtleScsXG4gICAgJ2dldEFsbEtleXMnLFxuICAgICdjb3VudCdcbiAgXSk7XG5cbiAgcHJveHlDdXJzb3JSZXF1ZXN0TWV0aG9kcyhPYmplY3RTdG9yZSwgJ19zdG9yZScsIElEQk9iamVjdFN0b3JlLCBbXG4gICAgJ29wZW5DdXJzb3InLFxuICAgICdvcGVuS2V5Q3Vyc29yJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoT2JqZWN0U3RvcmUsICdfc3RvcmUnLCBJREJPYmplY3RTdG9yZSwgW1xuICAgICdkZWxldGVJbmRleCdcbiAgXSk7XG5cbiAgZnVuY3Rpb24gVHJhbnNhY3Rpb24oaWRiVHJhbnNhY3Rpb24pIHtcbiAgICB0aGlzLl90eCA9IGlkYlRyYW5zYWN0aW9uO1xuICAgIHRoaXMuY29tcGxldGUgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlkYlRyYW5zYWN0aW9uLm9uY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICAgIGlkYlRyYW5zYWN0aW9uLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KGlkYlRyYW5zYWN0aW9uLmVycm9yKTtcbiAgICAgIH07XG4gICAgICBpZGJUcmFuc2FjdGlvbi5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChpZGJUcmFuc2FjdGlvbi5lcnJvcik7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgVHJhbnNhY3Rpb24ucHJvdG90eXBlLm9iamVjdFN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RTdG9yZSh0aGlzLl90eC5vYmplY3RTdG9yZS5hcHBseSh0aGlzLl90eCwgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgcHJveHlQcm9wZXJ0aWVzKFRyYW5zYWN0aW9uLCAnX3R4JywgW1xuICAgICdvYmplY3RTdG9yZU5hbWVzJyxcbiAgICAnbW9kZSdcbiAgXSk7XG5cbiAgcHJveHlNZXRob2RzKFRyYW5zYWN0aW9uLCAnX3R4JywgSURCVHJhbnNhY3Rpb24sIFtcbiAgICAnYWJvcnQnXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIFVwZ3JhZGVEQihkYiwgb2xkVmVyc2lvbiwgdHJhbnNhY3Rpb24pIHtcbiAgICB0aGlzLl9kYiA9IGRiO1xuICAgIHRoaXMub2xkVmVyc2lvbiA9IG9sZFZlcnNpb247XG4gICAgdGhpcy50cmFuc2FjdGlvbiA9IG5ldyBUcmFuc2FjdGlvbih0cmFuc2FjdGlvbik7XG4gIH1cblxuICBVcGdyYWRlREIucHJvdG90eXBlLmNyZWF0ZU9iamVjdFN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBPYmplY3RTdG9yZSh0aGlzLl9kYi5jcmVhdGVPYmplY3RTdG9yZS5hcHBseSh0aGlzLl9kYiwgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgcHJveHlQcm9wZXJ0aWVzKFVwZ3JhZGVEQiwgJ19kYicsIFtcbiAgICAnbmFtZScsXG4gICAgJ3ZlcnNpb24nLFxuICAgICdvYmplY3RTdG9yZU5hbWVzJ1xuICBdKTtcblxuICBwcm94eU1ldGhvZHMoVXBncmFkZURCLCAnX2RiJywgSURCRGF0YWJhc2UsIFtcbiAgICAnZGVsZXRlT2JqZWN0U3RvcmUnLFxuICAgICdjbG9zZSdcbiAgXSk7XG5cbiAgZnVuY3Rpb24gREIoZGIpIHtcbiAgICB0aGlzLl9kYiA9IGRiO1xuICB9XG5cbiAgREIucHJvdG90eXBlLnRyYW5zYWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBUcmFuc2FjdGlvbih0aGlzLl9kYi50cmFuc2FjdGlvbi5hcHBseSh0aGlzLl9kYiwgYXJndW1lbnRzKSk7XG4gIH07XG5cbiAgcHJveHlQcm9wZXJ0aWVzKERCLCAnX2RiJywgW1xuICAgICduYW1lJyxcbiAgICAndmVyc2lvbicsXG4gICAgJ29iamVjdFN0b3JlTmFtZXMnXG4gIF0pO1xuXG4gIHByb3h5TWV0aG9kcyhEQiwgJ19kYicsIElEQkRhdGFiYXNlLCBbXG4gICAgJ2Nsb3NlJ1xuICBdKTtcblxuICAvLyBBZGQgY3Vyc29yIGl0ZXJhdG9yc1xuICAvLyBUT0RPOiByZW1vdmUgdGhpcyBvbmNlIGJyb3dzZXJzIGRvIHRoZSByaWdodCB0aGluZyB3aXRoIHByb21pc2VzXG4gIFsnb3BlbkN1cnNvcicsICdvcGVuS2V5Q3Vyc29yJ10uZm9yRWFjaChmdW5jdGlvbihmdW5jTmFtZSkge1xuICAgIFtPYmplY3RTdG9yZSwgSW5kZXhdLmZvckVhY2goZnVuY3Rpb24oQ29uc3RydWN0b3IpIHtcbiAgICAgIC8vIERvbid0IGNyZWF0ZSBpdGVyYXRlS2V5Q3Vyc29yIGlmIG9wZW5LZXlDdXJzb3IgZG9lc24ndCBleGlzdC5cbiAgICAgIGlmICghKGZ1bmNOYW1lIGluIENvbnN0cnVjdG9yLnByb3RvdHlwZSkpIHJldHVybjtcblxuICAgICAgQ29uc3RydWN0b3IucHJvdG90eXBlW2Z1bmNOYW1lLnJlcGxhY2UoJ29wZW4nLCAnaXRlcmF0ZScpXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgbmF0aXZlT2JqZWN0ID0gdGhpcy5fc3RvcmUgfHwgdGhpcy5faW5kZXg7XG4gICAgICAgIHZhciByZXF1ZXN0ID0gbmF0aXZlT2JqZWN0W2Z1bmNOYW1lXS5hcHBseShuYXRpdmVPYmplY3QsIGFyZ3Muc2xpY2UoMCwgLTEpKTtcbiAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBjYWxsYmFjayhyZXF1ZXN0LnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBwb2x5ZmlsbCBnZXRBbGxcbiAgW0luZGV4LCBPYmplY3RTdG9yZV0uZm9yRWFjaChmdW5jdGlvbihDb25zdHJ1Y3Rvcikge1xuICAgIGlmIChDb25zdHJ1Y3Rvci5wcm90b3R5cGUuZ2V0QWxsKSByZXR1cm47XG4gICAgQ29uc3RydWN0b3IucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKHF1ZXJ5LCBjb3VudCkge1xuICAgICAgdmFyIGluc3RhbmNlID0gdGhpcztcbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICBpbnN0YW5jZS5pdGVyYXRlQ3Vyc29yKHF1ZXJ5LCBmdW5jdGlvbihjdXJzb3IpIHtcbiAgICAgICAgICBpZiAoIWN1cnNvcikge1xuICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW1zLnB1c2goY3Vyc29yLnZhbHVlKTtcblxuICAgICAgICAgIGlmIChjb3VudCAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLmxlbmd0aCA9PSBjb3VudCkge1xuICAgICAgICAgICAgcmVzb2x2ZShpdGVtcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnNvci5jb250aW51ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG9wZW5EYihuYW1lLCB2ZXJzaW9uLCB1cGdyYWRlQ2FsbGJhY2spIHtcbiAgICB2YXIgcCA9IHByb21pc2lmeVJlcXVlc3RDYWxsKGluZGV4ZWREQiwgJ29wZW4nLCBbbmFtZSwgdmVyc2lvbl0pO1xuICAgIHZhciByZXF1ZXN0ID0gcC5yZXF1ZXN0O1xuXG4gICAgaWYgKHJlcXVlc3QpIHtcbiAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKHVwZ3JhZGVDYWxsYmFjaykge1xuICAgICAgICAgIHVwZ3JhZGVDYWxsYmFjayhuZXcgVXBncmFkZURCKHJlcXVlc3QucmVzdWx0LCBldmVudC5vbGRWZXJzaW9uLCByZXF1ZXN0LnRyYW5zYWN0aW9uKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHAudGhlbihmdW5jdGlvbihkYikge1xuICAgICAgcmV0dXJuIG5ldyBEQihkYik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVEYihuYW1lKSB7XG4gICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3RDYWxsKGluZGV4ZWREQiwgJ2RlbGV0ZURhdGFiYXNlJywgW25hbWVdKTtcbiAgfVxuXG4gIGV4cG9ydHMub3BlbkRiID0gb3BlbkRiO1xuICBleHBvcnRzLmRlbGV0ZURiID0gZGVsZXRlRGI7XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxufSkpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLy8gPHJlZmVyZW5jZSBsaWI9XCJXZWJXb3JrZXJcIiAvPlxuXG4vLyBleHBvcnQgZW1wdHkgdHlwZSBiZWNhdXNlIG9mIHRzYyAtLWlzb2xhdGVkTW9kdWxlcyBmbGFnXG5leHBvcnQgdHlwZSB7fVxuZGVjbGFyZSBjb25zdCBzZWxmOiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGVcblxuXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiXG5pbXBvcnQgeyBnZXRNZXNzYWdpbmcsIG9uQmFja2dyb3VuZE1lc3NhZ2UgfSBmcm9tIFwiZmlyZWJhc2UvbWVzc2FnaW5nL3N3XCJcbmltcG9ydCB7IElOb3RpZiB9IGZyb20gXCIuL21vZGVscy9ub3RpZlwiXG5cbi8vIEluaXRpYWxpemUgdGhlIEZpcmViYXNlIGFwcCBpbiB0aGUgc2VydmljZSB3b3JrZXIgYnkgcGFzc2luZyBpblxuLy8geW91ciBhcHAncyBGaXJlYmFzZSBjb25maWcgb2JqZWN0LlxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2NvbmZpZy1vYmplY3RcblxuY29uc3QgZmlyZWJhc2VBcHAgPSBpbml0aWFsaXplQXBwKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5BUElfS0VZLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5BVVRIX0RPTUFJTixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5QUk9KRUNUX0lELFxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk1TR0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lELFxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5NRUFTVVJFX0lEXG59KVxuXG4vLyBSZXRyaWV2ZSBhbiBpbnN0YW5jZSBvZiBGaXJlYmFzZSBNZXNzYWdpbmcgc28gdGhhdCBpdCBjYW4gaGFuZGxlIGJhY2tncm91bmRcbi8vIG1lc3NhZ2VzLlxuY29uc3QgbWVzc2FnaW5nID0gZ2V0TWVzc2FnaW5nKGZpcmViYXNlQXBwKVxuXG5vbkJhY2tncm91bmRNZXNzYWdlKG1lc3NhZ2luZywgKHBheWxvYWQpID0+IHtcbiAgY29uc3Qgbm90aWY6IElOb3RpZiA9IHBheWxvYWQuZGF0YSBhcyBhbnlcbiAgc2VsZi5yZWdpc3RyYXRpb24uc2hvd05vdGlmaWNhdGlvbihub3RpZi5tZXNzYWdlKVxuICBjb25zb2xlLmxvZyhwYXlsb2FkKVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=