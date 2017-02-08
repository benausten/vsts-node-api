/*
* ---------------------------------------------------------
* Copyright(C) Microsoft Corporation. All rights reserved.
* ---------------------------------------------------------
* 
* ---------------------------------------------------------
* Generated file, DO NOT EDIT
* ---------------------------------------------------------
*/

// Licensed under the MIT license.  See LICENSE file in the project root for full license information.


import restm = require('./RestClient');
import httpm = require('./HttpClient');
import vsom = require('./VsoClient');
import basem = require('./ClientApiBases');
import serm = require('./Serialization');
import VsoBaseInterfaces = require('./interfaces/common/VsoBaseInterfaces');
import TestInterfaces = require("./interfaces/TestInterfaces");
import TfsCoreInterfaces = require("./interfaces/CoreInterfaces");

export interface ITestApi extends basem.ClientApiBase {
    getActionResults(project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<TestInterfaces.TestActionResultModel[]>;
    createTestIterationResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<TestInterfaces.TestAttachmentReference>;
    createTestResultAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.TestAttachmentReference>;
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    createTestRunAttachment(attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel, project: string, runId: number): Promise<TestInterfaces.TestAttachmentReference>;
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getTestRunAttachments(project: string, runId: number): Promise<TestInterfaces.TestAttachment[]>;
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): Promise<NodeJS.ReadableStream>;
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): Promise<TestInterfaces.WorkItemReference[]>;
    getCloneInformation(project: string, cloneOperationId: number, includeDetails?: boolean): Promise<TestInterfaces.CloneOperationInformation>;
    cloneTestPlan(cloneRequestBody: TestInterfaces.TestPlanCloneRequest, project: string, planId: number): Promise<TestInterfaces.CloneOperationInformation>;
    cloneTestSuite(cloneRequestBody: TestInterfaces.TestSuiteCloneRequest, project: string, planId: number, sourceSuiteId: number): Promise<TestInterfaces.CloneOperationInformation>;
    getCoverageView(project: string, containerId: number, filePath: string): Promise<void>;
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Promise<TestInterfaces.BuildCoverage[]>;
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): Promise<TestInterfaces.CodeCoverageSummary>;
    updateCodeCoverageSummary(coverageData: TestInterfaces.CodeCoverageData, project: string, buildId: number): Promise<void>;
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Promise<TestInterfaces.TestRunCoverage[]>;
    createTestConfiguration(testConfiguration: TestInterfaces.TestConfiguration, project: string): Promise<TestInterfaces.TestConfiguration>;
    deleteTestConfiguration(project: string, testConfigurationId: number): Promise<void>;
    getTestConfigurationById(project: string, testConfigurationId: number): Promise<TestInterfaces.TestConfiguration>;
    getTestConfigurations(project: string, skip?: number, top?: number, continuationToken?: string, includeAllProperties?: boolean): Promise<TestInterfaces.TestConfiguration[]>;
    updateTestConfiguration(testConfiguration: TestInterfaces.TestConfiguration, project: string, testConfigurationId: number): Promise<TestInterfaces.TestConfiguration>;
    addCustomFields(newFields: TestInterfaces.CustomTestFieldDefinition[], project: string): Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryCustomFields(project: string, scopeFilter: TestInterfaces.CustomTestFieldScope): Promise<TestInterfaces.CustomTestFieldDefinition[]>;
    queryTestResultHistory(filter: TestInterfaces.ResultsFilter, project: string): Promise<TestInterfaces.TestResultHistory>;
    getTestIteration(project: string, runId: number, testCaseResultId: number, iterationId: number, includeActionResults?: boolean): Promise<TestInterfaces.TestIterationDetailsModel>;
    getTestIterations(project: string, runId: number, testCaseResultId: number, includeActionResults?: boolean): Promise<TestInterfaces.TestIterationDetailsModel[]>;
    getTestRunLogs(project: string, runId: number): Promise<TestInterfaces.TestMessageLogDetails[]>;
    getResultParameters(project: string, runId: number, testCaseResultId: number, iterationId: number, paramName?: string): Promise<TestInterfaces.TestResultParameterModel[]>;
    createTestPlan(testPlan: TestInterfaces.PlanUpdateModel, project: string): Promise<TestInterfaces.TestPlan>;
    deleteTestPlan(project: string, planId: number): Promise<void>;
    getPlanById(project: string, planId: number): Promise<TestInterfaces.TestPlan>;
    getPlans(project: string, owner?: string, skip?: number, top?: number, includePlanDetails?: boolean, filterActivePlans?: boolean): Promise<TestInterfaces.TestPlan[]>;
    updateTestPlan(planUpdateModel: TestInterfaces.PlanUpdateModel, project: string, planId: number): Promise<TestInterfaces.TestPlan>;
    getPoint(project: string, planId: number, suiteId: number, pointIds: number, witFields?: string): Promise<TestInterfaces.TestPoint>;
    getPoints(project: string, planId: number, suiteId: number, witFields?: string, configurationId?: string, testCaseId?: string, testPointIds?: string, includePointDetails?: boolean, skip?: number, top?: number): Promise<TestInterfaces.TestPoint[]>;
    updateTestPoints(pointUpdateModel: TestInterfaces.PointUpdateModel, project: string, planId: number, suiteId: number, pointIds: string): Promise<TestInterfaces.TestPoint[]>;
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): Promise<TestInterfaces.TestResultsDetails>;
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string): Promise<TestInterfaces.TestResultsDetails>;
    getResultRetentionSettings(project: string): Promise<TestInterfaces.ResultRetentionSettings>;
    updateResultRetentionSettings(retentionSettings: TestInterfaces.ResultRetentionSettings, project: string): Promise<TestInterfaces.ResultRetentionSettings>;
    addTestResultsToTestRun(results: TestInterfaces.TestCaseResult[], project: string, runId: number): Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultById(project: string, runId: number, testCaseResultId: number, detailsToInclude?: TestInterfaces.ResultDetails): Promise<TestInterfaces.TestCaseResult>;
    getTestResults(project: string, runId: number, detailsToInclude?: TestInterfaces.ResultDetails, skip?: number, top?: number): Promise<TestInterfaces.TestCaseResult[]>;
    updateTestResults(results: TestInterfaces.TestCaseResult[], project: string, runId: number): Promise<TestInterfaces.TestCaseResult[]>;
    getTestResultsByQuery(query: TestInterfaces.TestResultsQuery, project: string): Promise<TestInterfaces.TestResultsQuery>;
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: TestInterfaces.BuildReference): Promise<TestInterfaces.TestResultSummary>;
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: TestInterfaces.ReleaseReference): Promise<TestInterfaces.TestResultSummary>;
    queryTestResultsSummaryForReleases(releases: TestInterfaces.ReleaseReference[], project: string): Promise<TestInterfaces.TestResultSummary[]>;
    queryTestSummaryByRequirement(resultsContext: TestInterfaces.TestResultsContext, project: string, workItemIds?: number[]): Promise<TestInterfaces.TestSummaryForWorkItem[]>;
    queryResultTrendForBuild(filter: TestInterfaces.TestResultTrendFilter, project: string): Promise<TestInterfaces.AggregatedDataForResultTrend[]>;
    queryResultTrendForRelease(filter: TestInterfaces.TestResultTrendFilter, project: string): Promise<TestInterfaces.AggregatedDataForResultTrend[]>;
    getTestRunStatistics(project: string, runId: number): Promise<TestInterfaces.TestRunStatistic>;
    createTestRun(testRun: TestInterfaces.RunCreateModel, project: string): Promise<TestInterfaces.TestRun>;
    deleteTestRun(project: string, runId: number): Promise<void>;
    getTestRunById(project: string, runId: number): Promise<TestInterfaces.TestRun>;
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Promise<TestInterfaces.TestRun[]>;
    updateTestRun(runUpdateModel: TestInterfaces.RunUpdateModel, project: string, runId: number): Promise<TestInterfaces.TestRun>;
    createTestSession(testSession: TestInterfaces.TestSession, teamContext: TfsCoreInterfaces.TeamContext): Promise<TestInterfaces.TestSession>;
    getTestSessions(teamContext: TfsCoreInterfaces.TeamContext, period?: number, allSessions?: boolean, includeAllProperties?: boolean, source?: TestInterfaces.TestSessionSource, includeOnlyCompletedSessions?: boolean): Promise<TestInterfaces.TestSession[]>;
    updateTestSession(testSession: TestInterfaces.TestSession, teamContext: TfsCoreInterfaces.TeamContext): Promise<TestInterfaces.TestSession>;
    deleteSharedParameter(project: string, sharedParameterId: number): Promise<void>;
    deleteSharedStep(project: string, sharedStepId: number): Promise<void>;
    getSuiteEntries(project: string, suiteId: number): Promise<TestInterfaces.SuiteEntry[]>;
    reorderSuiteEntries(suiteEntries: TestInterfaces.SuiteEntryUpdateModel[], project: string, suiteId: number): Promise<TestInterfaces.SuiteEntry[]>;
    addTestCasesToSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<TestInterfaces.SuiteTestCase[]>;
    getTestCaseById(project: string, planId: number, suiteId: number, testCaseIds: number): Promise<TestInterfaces.SuiteTestCase>;
    getTestCases(project: string, planId: number, suiteId: number): Promise<TestInterfaces.SuiteTestCase[]>;
    removeTestCasesFromSuiteUrl(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<void>;
    createTestSuite(testSuite: TestInterfaces.SuiteCreateModel, project: string, planId: number, suiteId: number): Promise<TestInterfaces.TestSuite[]>;
    deleteTestSuite(project: string, planId: number, suiteId: number): Promise<void>;
    getTestSuiteById(project: string, planId: number, suiteId: number, includeChildSuites?: boolean): Promise<TestInterfaces.TestSuite>;
    getTestSuitesForPlan(project: string, planId: number, includeSuites?: boolean, skip?: number, top?: number, asTreeView?: boolean): Promise<TestInterfaces.TestSuite[]>;
    updateTestSuite(suiteUpdateModel: TestInterfaces.SuiteUpdateModel, project: string, planId: number, suiteId: number): Promise<TestInterfaces.TestSuite>;
    getSuitesByTestCaseId(testCaseId: number): Promise<TestInterfaces.TestSuite[]>;
    deleteTestCase(project: string, testCaseId: number): Promise<void>;
    createTestSettings(testSettings: TestInterfaces.TestSettings, project: string): Promise<number>;
    deleteTestSettings(project: string, testSettingsId: number): Promise<void>;
    getTestSettingsById(project: string, testSettingsId: number): Promise<TestInterfaces.TestSettings>;
    createTestVariable(testVariable: TestInterfaces.TestVariable, project: string): Promise<TestInterfaces.TestVariable>;
    deleteTestVariable(project: string, testVariableId: number): Promise<void>;
    getTestVariableById(project: string, testVariableId: number): Promise<TestInterfaces.TestVariable>;
    getTestVariables(project: string, skip?: number, top?: number): Promise<TestInterfaces.TestVariable[]>;
    updateTestVariable(testVariable: TestInterfaces.TestVariable, project: string, testVariableId: number): Promise<TestInterfaces.TestVariable>;
    addWorkItemToTestLinks(workItemToTestLinks: TestInterfaces.WorkItemToTestLinks, project: string): Promise<TestInterfaces.WorkItemToTestLinks>;
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): Promise<boolean>;
    queryTestMethodLinkedWorkItems(project: string, testName: string): Promise<TestInterfaces.TestToWorkItemLinks>;
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): Promise<TestInterfaces.WorkItemReference[]>;
    createAgent(testAgent: TestInterfaces.TestAgent): Promise<TestInterfaces.TestAgent>;
    deleteAgent(id: number): Promise<void>;
    getAgent(id: number): Promise<TestInterfaces.TestAgent>;
    updateDistributedTestRun(distributedTestRun: TestInterfaces.DistributedTestRun, project: string): Promise<TestInterfaces.DistributedTestRun>;
    getSlice(testAgentId: number): Promise<TestInterfaces.TestAutomationRunSlice>;
    updateSlice(sliceDetails: TestInterfaces.TestAutomationRunSlice): Promise<void>;
}

export class TestApi extends basem.ClientApiBase implements ITestApi {
    constructor(baseUrl: string, handlers: VsoBaseInterfaces.IRequestHandler[]) {
        super(baseUrl, handlers, 'node-Test-api');
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} actionPath
    */
    public async getActionResults(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
        ): Promise<TestInterfaces.TestActionResultModel[]> {

        return new Promise<TestInterfaces.TestActionResultModel[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                iterationId: iterationId,
                actionPath: actionPath
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.3",
                    "Test",
                    "eaf40c31-ff84-4062-aafd-d5664be11a37",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestActionResultModel, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} actionPath
    */
    public async createTestIterationResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        actionPath?: string
        ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                iterationId: iterationId,
                actionPath: actionPath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, attachmentRequestModel, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    public async createTestResultAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, attachmentRequestModel, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns a test result attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} attachmentId
    */
    public async getTestResultAttachmentContent(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(Attachment);
                }
            };

            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns attachment references for test result.
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    public async getTestResultAttachments(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<TestInterfaces.TestAttachment[]> {

        return new Promise<TestInterfaces.TestAttachment[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestAttachment, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns a test result attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} attachmentId
    */
    public async getTestResultAttachmentZip(
        project: string,
        runId: number,
        testCaseResultId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(Attachment);
                }
            };

            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "2bffebe9-2f0f-4639-9af8-56129e9fed2d",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestAttachmentRequestModel} attachmentRequestModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async createTestRunAttachment(
        attachmentRequestModel: TestInterfaces.TestAttachmentRequestModel,
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestAttachmentReference> {

        return new Promise<TestInterfaces.TestAttachmentReference>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, attachmentRequestModel, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns a test run attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} attachmentId
    */
    public async getTestRunAttachmentContent(
        project: string,
        runId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(Attachment);
                }
            };

            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/octet-stream", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns attachment references for test run.
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async getTestRunAttachments(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestAttachment[]> {

        return new Promise<TestInterfaces.TestAttachment[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestAttachment, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * Returns a test run attachment
    * 
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} attachmentId
    */
    public async getTestRunAttachmentZip(
        project: string,
        runId: number,
        attachmentId: number
        ): Promise<NodeJS.ReadableStream> {

        return new Promise<NodeJS.ReadableStream>(async (resolve, reject) => {
            let onResult = (err: any, statusCode: number, Attachment: NodeJS.ReadableStream) => {
                if (err) {
                    err.statusCode = statusCode;
                    reject(err);
                }
                else {
                    resolve(Attachment);
                }
            };

            let routeValues: any = {
                project: project,
                runId: runId,
                attachmentId: attachmentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "4f004af4-a507-489c-9b13-cb62060beb11",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let accept: string = this.createAcceptHeader("application/zip", apiVersion);
                this.httpClient.getStream(url, accept, onResult);
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    */
    public async getBugsLinkedToTestResult(
        project: string,
        runId: number,
        testCaseResultId: number
        ): Promise<TestInterfaces.WorkItemReference[]> {

        return new Promise<TestInterfaces.WorkItemReference[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "6de20ca2-67de-4faf-97fa-38c5d585eb00",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} cloneOperationId
    * @param {boolean} includeDetails
    */
    public async getCloneInformation(
        project: string,
        cloneOperationId: number,
        includeDetails?: boolean
        ): Promise<TestInterfaces.CloneOperationInformation> {

        return new Promise<TestInterfaces.CloneOperationInformation>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                cloneOperationId: cloneOperationId
            };

            let queryValues: any = {
                '$includeDetails': includeDetails,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "5b9d6320-abed-47a5-a151-cd6dc3798be6",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CloneOperationInformation, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestPlanCloneRequest} cloneRequestBody
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public async cloneTestPlan(
        cloneRequestBody: TestInterfaces.TestPlanCloneRequest,
        project: string,
        planId: number
        ): Promise<TestInterfaces.CloneOperationInformation> {

        return new Promise<TestInterfaces.CloneOperationInformation>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "edc3ef4b-8460-4e86-86fa-8e4f5e9be831",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, cloneRequestBody, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestPlanCloneRequest, responseTypeMetadata: TestInterfaces.TypeInfo.CloneOperationInformation, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestSuiteCloneRequest} cloneRequestBody
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} sourceSuiteId
    */
    public async cloneTestSuite(
        cloneRequestBody: TestInterfaces.TestSuiteCloneRequest,
        project: string,
        planId: number,
        sourceSuiteId: number
        ): Promise<TestInterfaces.CloneOperationInformation> {

        return new Promise<TestInterfaces.CloneOperationInformation>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                sourceSuiteId: sourceSuiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "751e4ab5-5bf6-4fb5-9d5d-19ef347662dd",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, cloneRequestBody, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CloneOperationInformation, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/browse/containerId/filePath Request: HTML content of Code Coverage report
    * 
    * @param {string} project - Project ID or project name
    * @param {number} containerId
    * @param {string} filePath
    */
    public async getCoverageView(
        project: string,
        containerId: number,
        filePath: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                containerId: containerId
            };

            let queryValues: any = {
                filePath: filePath,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "5a37d0e4-c49d-4b18-9ec1-e7cae9914e71",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} flags
    */
    public async getBuildCodeCoverage(
        project: string,
        buildId: number,
        flags: number
        ): Promise<TestInterfaces.BuildCoverage[]> {

        return new Promise<TestInterfaces.BuildCoverage[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "77560e8a-4e8c-4d59-894e-a5f264c24444",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {number} deltaBuildId
    */
    public async getCodeCoverageSummary(
        project: string,
        buildId: number,
        deltaBuildId?: number
        ): Promise<TestInterfaces.CodeCoverageSummary> {

        return new Promise<TestInterfaces.CodeCoverageSummary>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                deltaBuildId: deltaBuildId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "77560e8a-4e8c-4d59-894e-a5f264c24444",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
    * 
    * @param {TestInterfaces.CodeCoverageData} coverageData
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    */
    public async updateCodeCoverageSummary(
        coverageData: TestInterfaces.CodeCoverageData,
        project: string,
        buildId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "77560e8a-4e8c-4d59-894e-a5f264c24444",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, coverageData, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} flags
    */
    public async getTestRunCodeCoverage(
        project: string,
        runId: number,
        flags: number
        ): Promise<TestInterfaces.TestRunCoverage[]> {

        return new Promise<TestInterfaces.TestRunCoverage[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                flags: flags,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "9629116f-3b89-4ed8-b358-d4694efda160",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestConfiguration} testConfiguration
    * @param {string} project - Project ID or project name
    */
    public async createTestConfiguration(
        testConfiguration: TestInterfaces.TestConfiguration,
        project: string
        ): Promise<TestInterfaces.TestConfiguration> {

        return new Promise<TestInterfaces.TestConfiguration>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testConfiguration, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testConfigurationId
    */
    public async deleteTestConfiguration(
        project: string,
        testConfigurationId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testConfigurationId
    */
    public async getTestConfigurationById(
        project: string,
        testConfigurationId: number
        ): Promise<TestInterfaces.TestConfiguration> {

        return new Promise<TestInterfaces.TestConfiguration>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    * @param {string} continuationToken
    * @param {boolean} includeAllProperties
    */
    public async getTestConfigurations(
        project: string,
        skip?: number,
        top?: number,
        continuationToken?: string,
        includeAllProperties?: boolean
        ): Promise<TestInterfaces.TestConfiguration[]> {

        return new Promise<TestInterfaces.TestConfiguration[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
                continuationToken: continuationToken,
                includeAllProperties: includeAllProperties,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestConfiguration} testConfiguration
    * @param {string} project - Project ID or project name
    * @param {number} testConfigurationId
    */
    public async updateTestConfiguration(
        testConfiguration: TestInterfaces.TestConfiguration,
        project: string,
        testConfigurationId: number
        ): Promise<TestInterfaces.TestConfiguration> {

        return new Promise<TestInterfaces.TestConfiguration>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testConfigurationId: testConfigurationId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "d667591b-b9fd-4263-997a-9a084cca848f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, testConfiguration, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseTypeMetadata: TestInterfaces.TypeInfo.TestConfiguration, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.CustomTestFieldDefinition[]} newFields
    * @param {string} project - Project ID or project name
    */
    public async addCustomFields(
        newFields: TestInterfaces.CustomTestFieldDefinition[],
        project: string
        ): Promise<TestInterfaces.CustomTestFieldDefinition[]> {

        return new Promise<TestInterfaces.CustomTestFieldDefinition[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "8ce1923b-f4c7-4e22-b93b-f6284e525ec2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, newFields, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {TestInterfaces.CustomTestFieldScope} scopeFilter
    */
    public async queryCustomFields(
        project: string,
        scopeFilter: TestInterfaces.CustomTestFieldScope
        ): Promise<TestInterfaces.CustomTestFieldDefinition[]> {

        return new Promise<TestInterfaces.CustomTestFieldDefinition[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                scopeFilter: scopeFilter,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "8ce1923b-f4c7-4e22-b93b-f6284e525ec2",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.CustomTestFieldDefinition, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.ResultsFilter} filter
    * @param {string} project - Project ID or project name
    */
    public async queryTestResultHistory(
        filter: TestInterfaces.ResultsFilter,
        project: string
        ): Promise<TestInterfaces.TestResultHistory> {

        return new Promise<TestInterfaces.TestResultHistory>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "234616f5-429c-4e7b-9192-affd76731dfd",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, filter, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.ResultsFilter, responseTypeMetadata: TestInterfaces.TypeInfo.TestResultHistory, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {boolean} includeActionResults
    */
    public async getTestIteration(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        includeActionResults?: boolean
        ): Promise<TestInterfaces.TestIterationDetailsModel> {

        return new Promise<TestInterfaces.TestIterationDetailsModel>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                iterationId: iterationId
            };

            let queryValues: any = {
                includeActionResults: includeActionResults,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.3",
                    "Test",
                    "73eb9074-3446-4c44-8296-2f811950ff8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestIterationDetailsModel, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {boolean} includeActionResults
    */
    public async getTestIterations(
        project: string,
        runId: number,
        testCaseResultId: number,
        includeActionResults?: boolean
        ): Promise<TestInterfaces.TestIterationDetailsModel[]> {

        return new Promise<TestInterfaces.TestIterationDetailsModel[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                includeActionResults: includeActionResults,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.3",
                    "Test",
                    "73eb9074-3446-4c44-8296-2f811950ff8d",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestIterationDetailsModel, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async getTestRunLogs(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestMessageLogDetails[]> {

        return new Promise<TestInterfaces.TestMessageLogDetails[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "a1e55200-637e-42e9-a7c0-7e5bfdedb1b3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestMessageLogDetails, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {number} iterationId
    * @param {string} paramName
    */
    public async getResultParameters(
        project: string,
        runId: number,
        testCaseResultId: number,
        iterationId: number,
        paramName?: string
        ): Promise<TestInterfaces.TestResultParameterModel[]> {

        return new Promise<TestInterfaces.TestResultParameterModel[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId,
                iterationId: iterationId
            };

            let queryValues: any = {
                paramName: paramName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.3",
                    "Test",
                    "7c69810d-3354-4af3-844a-180bd25db08a",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.PlanUpdateModel} testPlan
    * @param {string} project - Project ID or project name
    */
    public async createTestPlan(
        testPlan: TestInterfaces.PlanUpdateModel,
        project: string
        ): Promise<TestInterfaces.TestPlan> {

        return new Promise<TestInterfaces.TestPlan>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testPlan, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public async deleteTestPlan(
        project: string,
        planId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public async getPlanById(
        project: string,
        planId: number
        ): Promise<TestInterfaces.TestPlan> {

        return new Promise<TestInterfaces.TestPlan>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} owner
    * @param {number} skip
    * @param {number} top
    * @param {boolean} includePlanDetails
    * @param {boolean} filterActivePlans
    */
    public async getPlans(
        project: string,
        owner?: string,
        skip?: number,
        top?: number,
        includePlanDetails?: boolean,
        filterActivePlans?: boolean
        ): Promise<TestInterfaces.TestPlan[]> {

        return new Promise<TestInterfaces.TestPlan[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                owner: owner,
                '$skip': skip,
                '$top': top,
                includePlanDetails: includePlanDetails,
                filterActivePlans: filterActivePlans,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.PlanUpdateModel} planUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    */
    public async updateTestPlan(
        planUpdateModel: TestInterfaces.PlanUpdateModel,
        project: string,
        planId: number
        ): Promise<TestInterfaces.TestPlan> {

        return new Promise<TestInterfaces.TestPlan>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "51712106-7278-4208-8563-1c96f40cf5e4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, planUpdateModel, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPlan, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {number} pointIds
    * @param {string} witFields
    */
    public async getPoint(
        project: string,
        planId: number,
        suiteId: number,
        pointIds: number,
        witFields?: string
        ): Promise<TestInterfaces.TestPoint> {

        return new Promise<TestInterfaces.TestPoint>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                pointIds: pointIds
            };

            let queryValues: any = {
                witFields: witFields,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "3bcfd5c8-be62-488e-b1da-b8289ce9299c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} witFields
    * @param {string} configurationId
    * @param {string} testCaseId
    * @param {string} testPointIds
    * @param {boolean} includePointDetails
    * @param {number} skip
    * @param {number} top
    */
    public async getPoints(
        project: string,
        planId: number,
        suiteId: number,
        witFields?: string,
        configurationId?: string,
        testCaseId?: string,
        testPointIds?: string,
        includePointDetails?: boolean,
        skip?: number,
        top?: number
        ): Promise<TestInterfaces.TestPoint[]> {

        return new Promise<TestInterfaces.TestPoint[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                witFields: witFields,
                configurationId: configurationId,
                testCaseId: testCaseId,
                testPointIds: testPointIds,
                includePointDetails: includePointDetails,
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "3bcfd5c8-be62-488e-b1da-b8289ce9299c",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.PointUpdateModel} pointUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} pointIds
    */
    public async updateTestPoints(
        pointUpdateModel: TestInterfaces.PointUpdateModel,
        project: string,
        planId: number,
        suiteId: number,
        pointIds: string
        ): Promise<TestInterfaces.TestPoint[]> {

        return new Promise<TestInterfaces.TestPoint[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                pointIds: pointIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "3bcfd5c8-be62-488e-b1da-b8289ce9299c",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, pointUpdateModel, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestPoint, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} publishContext
    * @param {string} groupBy
    * @param {string} filter
    * @param {string} orderby
    */
    public async getTestResultDetailsForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string
        ): Promise<TestInterfaces.TestResultsDetails> {

        return new Promise<TestInterfaces.TestResultsDetails>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                groupBy: groupBy,
                '$filter': filter,
                '$orderby': orderby,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "efb387b0-10d5-42e7-be40-95e06ee9430f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultsDetails, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} releaseEnvId
    * @param {string} publishContext
    * @param {string} groupBy
    * @param {string} filter
    * @param {string} orderby
    */
    public async getTestResultDetailsForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        groupBy?: string,
        filter?: string,
        orderby?: string
        ): Promise<TestInterfaces.TestResultsDetails> {

        return new Promise<TestInterfaces.TestResultsDetails>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
                publishContext: publishContext,
                groupBy: groupBy,
                '$filter': filter,
                '$orderby': orderby,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "b834ec7e-35bb-450f-a3c8-802e70ca40dd",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultsDetails, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    */
    public async getResultRetentionSettings(
        project: string
        ): Promise<TestInterfaces.ResultRetentionSettings> {

        return new Promise<TestInterfaces.ResultRetentionSettings>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "a3206d9e-fa8d-42d3-88cb-f75c51e69cde",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.ResultRetentionSettings} retentionSettings
    * @param {string} project - Project ID or project name
    */
    public async updateResultRetentionSettings(
        retentionSettings: TestInterfaces.ResultRetentionSettings,
        project: string
        ): Promise<TestInterfaces.ResultRetentionSettings> {

        return new Promise<TestInterfaces.ResultRetentionSettings>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "a3206d9e-fa8d-42d3-88cb-f75c51e69cde",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, retentionSettings, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseTypeMetadata: TestInterfaces.TypeInfo.ResultRetentionSettings, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestCaseResult[]} results
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async addTestResultsToTestRun(
        results: TestInterfaces.TestCaseResult[],
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestCaseResult[]> {

        return new Promise<TestInterfaces.TestCaseResult[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.4",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, results, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {number} testCaseResultId
    * @param {TestInterfaces.ResultDetails} detailsToInclude
    */
    public async getTestResultById(
        project: string,
        runId: number,
        testCaseResultId: number,
        detailsToInclude?: TestInterfaces.ResultDetails
        ): Promise<TestInterfaces.TestCaseResult> {

        return new Promise<TestInterfaces.TestCaseResult>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId,
                testCaseResultId: testCaseResultId
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.4",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    * @param {TestInterfaces.ResultDetails} detailsToInclude
    * @param {number} skip
    * @param {number} top
    */
    public async getTestResults(
        project: string,
        runId: number,
        detailsToInclude?: TestInterfaces.ResultDetails,
        skip?: number,
        top?: number
        ): Promise<TestInterfaces.TestCaseResult[]> {

        return new Promise<TestInterfaces.TestCaseResult[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            let queryValues: any = {
                detailsToInclude: detailsToInclude,
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.4",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestCaseResult[]} results
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async updateTestResults(
        results: TestInterfaces.TestCaseResult[],
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestCaseResult[]> {

        return new Promise<TestInterfaces.TestCaseResult[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.4",
                    "Test",
                    "4637d869-3a76-4468-8057-0bb02aa385cf",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, results, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseTypeMetadata: TestInterfaces.TypeInfo.TestCaseResult, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestResultsQuery} query
    * @param {string} project - Project ID or project name
    */
    public async getTestResultsByQuery(
        query: TestInterfaces.TestResultsQuery,
        project: string
        ): Promise<TestInterfaces.TestResultsQuery> {

        return new Promise<TestInterfaces.TestResultsQuery>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.4",
                    "Test",
                    "6711da49-8e6f-4d35-9f73-cef7a3c81a5b",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, query, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultsQuery, responseTypeMetadata: TestInterfaces.TypeInfo.TestResultsQuery, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} buildId
    * @param {string} publishContext
    * @param {boolean} includeFailureDetails
    * @param {TestInterfaces.BuildReference} buildToCompare
    */
    public async queryTestResultsReportForBuild(
        project: string,
        buildId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        buildToCompare?: TestInterfaces.BuildReference
        ): Promise<TestInterfaces.TestResultSummary> {

        return new Promise<TestInterfaces.TestResultSummary>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildId: buildId,
                publishContext: publishContext,
                includeFailureDetails: includeFailureDetails,
                buildToCompare: buildToCompare,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "000ef77b-fea2-498d-a10d-ad1a037f559f",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultSummary, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} releaseId
    * @param {number} releaseEnvId
    * @param {string} publishContext
    * @param {boolean} includeFailureDetails
    * @param {TestInterfaces.ReleaseReference} releaseToCompare
    */
    public async queryTestResultsReportForRelease(
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        releaseToCompare?: TestInterfaces.ReleaseReference
        ): Promise<TestInterfaces.TestResultSummary> {

        return new Promise<TestInterfaces.TestResultSummary>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                releaseId: releaseId,
                releaseEnvId: releaseEnvId,
                publishContext: publishContext,
                includeFailureDetails: includeFailureDetails,
                releaseToCompare: releaseToCompare,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "85765790-ac68-494e-b268-af36c3929744",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultSummary, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.ReleaseReference[]} releases
    * @param {string} project - Project ID or project name
    */
    public async queryTestResultsSummaryForReleases(
        releases: TestInterfaces.ReleaseReference[],
        project: string
        ): Promise<TestInterfaces.TestResultSummary[]> {

        return new Promise<TestInterfaces.TestResultSummary[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "85765790-ac68-494e-b268-af36c3929744",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, releases, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestResultSummary, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestResultsContext} resultsContext
    * @param {string} project - Project ID or project name
    * @param {number[]} workItemIds
    */
    public async queryTestSummaryByRequirement(
        resultsContext: TestInterfaces.TestResultsContext,
        project: string,
        workItemIds?: number[]
        ): Promise<TestInterfaces.TestSummaryForWorkItem[]> {

        return new Promise<TestInterfaces.TestSummaryForWorkItem[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                workItemIds: workItemIds && workItemIds.join(","),
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "cd08294e-308d-4460-a46e-4cfdefba0b4b",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, resultsContext, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultsContext, responseTypeMetadata: TestInterfaces.TypeInfo.TestSummaryForWorkItem, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestResultTrendFilter} filter
    * @param {string} project - Project ID or project name
    */
    public async queryResultTrendForBuild(
        filter: TestInterfaces.TestResultTrendFilter,
        project: string
        ): Promise<TestInterfaces.AggregatedDataForResultTrend[]> {

        return new Promise<TestInterfaces.AggregatedDataForResultTrend[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "fbc82a85-0786-4442-88bb-eb0fda6b01b0",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, filter, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultTrendFilter, responseTypeMetadata: TestInterfaces.TypeInfo.AggregatedDataForResultTrend, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestResultTrendFilter} filter
    * @param {string} project - Project ID or project name
    */
    public async queryResultTrendForRelease(
        filter: TestInterfaces.TestResultTrendFilter,
        project: string
        ): Promise<TestInterfaces.AggregatedDataForResultTrend[]> {

        return new Promise<TestInterfaces.AggregatedDataForResultTrend[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "dd178e93-d8dd-4887-9635-d6b9560b7b6e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, filter, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestResultTrendFilter, responseTypeMetadata: TestInterfaces.TypeInfo.AggregatedDataForResultTrend, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async getTestRunStatistics(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestRunStatistic> {

        return new Promise<TestInterfaces.TestRunStatistic>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "0a42c424-d764-4a16-a2d5-5c85f87d0ae8",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.RunCreateModel} testRun
    * @param {string} project - Project ID or project name
    */
    public async createTestRun(
        testRun: TestInterfaces.RunCreateModel,
        project: string
        ): Promise<TestInterfaces.TestRun> {

        return new Promise<TestInterfaces.TestRun>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testRun, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async deleteTestRun(
        project: string,
        runId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async getTestRunById(
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestRun> {

        return new Promise<TestInterfaces.TestRun>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} buildUri
    * @param {string} owner
    * @param {string} tmiRunId
    * @param {number} planId
    * @param {boolean} includeRunDetails
    * @param {boolean} automated
    * @param {number} skip
    * @param {number} top
    */
    public async getTestRuns(
        project: string,
        buildUri?: string,
        owner?: string,
        tmiRunId?: string,
        planId?: number,
        includeRunDetails?: boolean,
        automated?: boolean,
        skip?: number,
        top?: number
        ): Promise<TestInterfaces.TestRun[]> {

        return new Promise<TestInterfaces.TestRun[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                buildUri: buildUri,
                owner: owner,
                tmiRunId: tmiRunId,
                planId: planId,
                includeRunDetails: includeRunDetails,
                automated: automated,
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.RunUpdateModel} runUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} runId
    */
    public async updateTestRun(
        runUpdateModel: TestInterfaces.RunUpdateModel,
        project: string,
        runId: number
        ): Promise<TestInterfaces.TestRun> {

        return new Promise<TestInterfaces.TestRun>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                runId: runId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "cadb3810-d47d-4a3c-a234-fe5f3be50138",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, runUpdateModel, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.RunUpdateModel, responseTypeMetadata: TestInterfaces.TypeInfo.TestRun, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestSession} testSession
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    */
    public async createTestSession(
        testSession: TestInterfaces.TestSession,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<TestInterfaces.TestSession> {

        return new Promise<TestInterfaces.TestSession>(async (resolve, reject) => {
            
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testSession, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    * @param {number} period
    * @param {boolean} allSessions
    * @param {boolean} includeAllProperties
    * @param {TestInterfaces.TestSessionSource} source
    * @param {boolean} includeOnlyCompletedSessions
    */
    public async getTestSessions(
        teamContext: TfsCoreInterfaces.TeamContext,
        period?: number,
        allSessions?: boolean,
        includeAllProperties?: boolean,
        source?: TestInterfaces.TestSessionSource,
        includeOnlyCompletedSessions?: boolean
        ): Promise<TestInterfaces.TestSession[]> {

        return new Promise<TestInterfaces.TestSession[]>(async (resolve, reject) => {
            
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            let queryValues: any = {
                period: period,
                allSessions: allSessions,
                includeAllProperties: includeAllProperties,
                source: source,
                includeOnlyCompletedSessions: includeOnlyCompletedSessions,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestSession} testSession
    * @param {TfsCoreInterfaces.TeamContext} teamContext - The team context for the operation
    */
    public async updateTestSession(
        testSession: TestInterfaces.TestSession,
        teamContext: TfsCoreInterfaces.TeamContext
        ): Promise<TestInterfaces.TestSession> {

        return new Promise<TestInterfaces.TestSession>(async (resolve, reject) => {
            
            let project = teamContext.projectId || teamContext.project;
            let team = teamContext.teamId || teamContext.team;

            let routeValues: any = {
                project: project,
                team: team
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "1500b4b4-6c69-4ca6-9b18-35e9e97fe2ac",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, testSession, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseTypeMetadata: TestInterfaces.TypeInfo.TestSession, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} sharedParameterId
    */
    public async deleteSharedParameter(
        project: string,
        sharedParameterId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                sharedParameterId: sharedParameterId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "8300eeca-0f8c-4eff-a089-d2dda409c41f",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} sharedStepId
    */
    public async deleteSharedStep(
        project: string,
        sharedStepId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                sharedStepId: sharedStepId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "fabb3cc9-e3f8-40b7-8b62-24cc4b73fccf",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} suiteId
    */
    public async getSuiteEntries(
        project: string,
        suiteId: number
        ): Promise<TestInterfaces.SuiteEntry[]> {

        return new Promise<TestInterfaces.SuiteEntry[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.SuiteEntryUpdateModel[]} suiteEntries
    * @param {string} project - Project ID or project name
    * @param {number} suiteId
    */
    public async reorderSuiteEntries(
        suiteEntries: TestInterfaces.SuiteEntryUpdateModel[],
        project: string,
        suiteId: number
        ): Promise<TestInterfaces.SuiteEntry[]> {

        return new Promise<TestInterfaces.SuiteEntry[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "bf8b7f78-0c1f-49cb-89e9-d1a17bcaaad3",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, suiteEntries, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} testCaseIds
    */
    public async addTestCasesToSuite(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
        ): Promise<TestInterfaces.SuiteTestCase[]> {

        return new Promise<TestInterfaces.SuiteTestCase[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                testCaseIds: testCaseIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {number} testCaseIds
    */
    public async getTestCaseById(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: number
        ): Promise<TestInterfaces.SuiteTestCase> {

        return new Promise<TestInterfaces.SuiteTestCase>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                testCaseIds: testCaseIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public async getTestCases(
        project: string,
        planId: number,
        suiteId: number
        ): Promise<TestInterfaces.SuiteTestCase[]> {

        return new Promise<TestInterfaces.SuiteTestCase[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {string} testCaseIds
    */
    public async removeTestCasesFromSuiteUrl(
        project: string,
        planId: number,
        suiteId: number,
        testCaseIds: string
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId,
                testCaseIds: testCaseIds
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "a4a1ec1c-b03f-41ca-8857-704594ecf58e",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.SuiteCreateModel} testSuite
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public async createTestSuite(
        testSuite: TestInterfaces.SuiteCreateModel,
        project: string,
        planId: number,
        suiteId: number
        ): Promise<TestInterfaces.TestSuite[]> {

        return new Promise<TestInterfaces.TestSuite[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testSuite, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public async deleteTestSuite(
        project: string,
        planId: number,
        suiteId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    * @param {boolean} includeChildSuites
    */
    public async getTestSuiteById(
        project: string,
        planId: number,
        suiteId: number,
        includeChildSuites?: boolean
        ): Promise<TestInterfaces.TestSuite> {

        return new Promise<TestInterfaces.TestSuite>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            let queryValues: any = {
                includeChildSuites: includeChildSuites,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {boolean} includeSuites
    * @param {number} skip
    * @param {number} top
    * @param {boolean} asTreeView
    */
    public async getTestSuitesForPlan(
        project: string,
        planId: number,
        includeSuites?: boolean,
        skip?: number,
        top?: number,
        asTreeView?: boolean
        ): Promise<TestInterfaces.TestSuite[]> {

        return new Promise<TestInterfaces.TestSuite[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId
            };

            let queryValues: any = {
                includeSuites: includeSuites,
                '$skip': skip,
                '$top': top,
                '$asTreeView': asTreeView,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.SuiteUpdateModel} suiteUpdateModel
    * @param {string} project - Project ID or project name
    * @param {number} planId
    * @param {number} suiteId
    */
    public async updateTestSuite(
        suiteUpdateModel: TestInterfaces.SuiteUpdateModel,
        project: string,
        planId: number,
        suiteId: number
        ): Promise<TestInterfaces.TestSuite> {

        return new Promise<TestInterfaces.TestSuite>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                planId: planId,
                suiteId: suiteId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.2",
                    "Test",
                    "7b7619a0-cb54-4ab3-bf22-194056f45dd1",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, suiteUpdateModel, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {number} testCaseId
    */
    public async getSuitesByTestCaseId(
        testCaseId: number
        ): Promise<TestInterfaces.TestSuite[]> {

        return new Promise<TestInterfaces.TestSuite[]>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            let queryValues: any = {
                testCaseId: testCaseId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "09a6167b-e969-4775-9247-b94cf3819caf",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestSuite, responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testCaseId
    */
    public async deleteTestCase(
        project: string,
        testCaseId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testCaseId: testCaseId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "4d472e0f-e32c-4ef8-adf4-a4078772889c",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestSettings} testSettings
    * @param {string} project - Project ID or project name
    */
    public async createTestSettings(
        testSettings: TestInterfaces.TestSettings,
        project: string
        ): Promise<number> {

        return new Promise<number>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "8133ce14-962f-42af-a5f9-6aa9defcb9c8",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testSettings, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    public async deleteTestSettings(
        project: string,
        testSettingsId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testSettingsId: testSettingsId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "8133ce14-962f-42af-a5f9-6aa9defcb9c8",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testSettingsId
    */
    public async getTestSettingsById(
        project: string,
        testSettingsId: number
        ): Promise<TestInterfaces.TestSettings> {

        return new Promise<TestInterfaces.TestSettings>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testSettingsId: testSettingsId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "8133ce14-962f-42af-a5f9-6aa9defcb9c8",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestVariable} testVariable
    * @param {string} project - Project ID or project name
    */
    public async createTestVariable(
        testVariable: TestInterfaces.TestVariable,
        project: string
        ): Promise<TestInterfaces.TestVariable> {

        return new Promise<TestInterfaces.TestVariable>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testVariable, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testVariableId
    */
    public async deleteTestVariable(
        project: string,
        testVariableId: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} testVariableId
    */
    public async getTestVariableById(
        project: string,
        testVariableId: number
        ): Promise<TestInterfaces.TestVariable> {

        return new Promise<TestInterfaces.TestVariable>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {number} skip
    * @param {number} top
    */
    public async getTestVariables(
        project: string,
        skip?: number,
        top?: number
        ): Promise<TestInterfaces.TestVariable[]> {

        return new Promise<TestInterfaces.TestVariable[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                '$skip': skip,
                '$top': top,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestVariable} testVariable
    * @param {string} project - Project ID or project name
    * @param {number} testVariableId
    */
    public async updateTestVariable(
        testVariable: TestInterfaces.TestVariable,
        project: string,
        testVariableId: number
        ): Promise<TestInterfaces.TestVariable> {

        return new Promise<TestInterfaces.TestVariable>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project,
                testVariableId: testVariableId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "be3fcb2b-995b-47bf-90e5-ca3cf9980912",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, testVariable, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.WorkItemToTestLinks} workItemToTestLinks
    * @param {string} project - Project ID or project name
    */
    public async addWorkItemToTestLinks(
        workItemToTestLinks: TestInterfaces.WorkItemToTestLinks,
        project: string
        ): Promise<TestInterfaces.WorkItemToTestLinks> {

        return new Promise<TestInterfaces.WorkItemToTestLinks>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "371b1655-ce05-412e-a113-64cc77bb78d2",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, workItemToTestLinks, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} testName
    * @param {number} workItemId
    */
    public async deleteTestMethodToWorkItemLink(
        project: string,
        testName: string,
        workItemId: number
        ): Promise<boolean> {

        return new Promise<boolean>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testName: testName,
                workItemId: workItemId,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "7b0bdee3-a354-47f9-a42c-89018d7808d5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} testName
    */
    public async queryTestMethodLinkedWorkItems(
        project: string,
        testName: string
        ): Promise<TestInterfaces.TestToWorkItemLinks> {

        return new Promise<TestInterfaces.TestToWorkItemLinks>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                testName: testName,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "7b0bdee3-a354-47f9-a42c-89018d7808d5",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, null, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {string} project - Project ID or project name
    * @param {string} workItemCategory
    * @param {string} automatedTestName
    * @param {number} testCaseId
    * @param {Date} maxCompleteDate
    * @param {number} days
    * @param {number} workItemCount
    */
    public async queryTestResultWorkItems(
        project: string,
        workItemCategory: string,
        automatedTestName?: string,
        testCaseId?: number,
        maxCompleteDate?: Date,
        days?: number,
        workItemCount?: number
        ): Promise<TestInterfaces.WorkItemReference[]> {

        return new Promise<TestInterfaces.WorkItemReference[]>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            let queryValues: any = {
                workItemCategory: workItemCategory,
                automatedTestName: automatedTestName,
                testCaseId: testCaseId,
                maxCompleteDate: maxCompleteDate,
                days: days,
                '$workItemCount': workItemCount,
            };
            
            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "926ff5dc-137f-45f0-bd51-9412fa9810ce",
                    routeValues,
                    queryValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: true };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }
     /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/agents Request: Json of TestAgent
    * 
    * @param {TestInterfaces.TestAgent} testAgent
    */
    public async createAgent(
        testAgent: TestInterfaces.TestAgent
        ): Promise<TestInterfaces.TestAgent> {

        return new Promise<TestInterfaces.TestAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "0f1857de-6e56-4010-9ea7-f29b80b911c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.create(url, apiVersion, testAgent, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/agents/id Request: Json of id
    * 
    * @param {number} id
    */
    public async deleteAgent(
        id: number
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "0f1857de-6e56-4010-9ea7-f29b80b911c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.del(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/agents/id Request: Json of id
    * 
    * @param {number} id
    */
    public async getAgent(
        id: number
        ): Promise<TestInterfaces.TestAgent> {

        return new Promise<TestInterfaces.TestAgent>(async (resolve, reject) => {
            
            let routeValues: any = {
                id: id
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "0f1857de-6e56-4010-9ea7-f29b80b911c4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/DistributedTestRuns/ Request: Json of TestRun
    * 
    * @param {TestInterfaces.DistributedTestRun} distributedTestRun
    * @param {string} project
    */
    public async updateDistributedTestRun(
        distributedTestRun: TestInterfaces.DistributedTestRun,
        project: string
        ): Promise<TestInterfaces.DistributedTestRun> {

        return new Promise<TestInterfaces.DistributedTestRun>(async (resolve, reject) => {
            
            let routeValues: any = {
                project: project
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "b7c4fe2a-9dd1-4dae-8b77-8412002de5a4",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, distributedTestRun, null);
                let serializationData = {  responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/slices/[?testAgentId=1]
    * 
    * @param {number} testAgentId
    */
    public async getSlice(
        testAgentId: number
        ): Promise<TestInterfaces.TestAutomationRunSlice> {

        return new Promise<TestInterfaces.TestAutomationRunSlice>(async (resolve, reject) => {
            
            let routeValues: any = {
                testAgentId: testAgentId
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "575891b2-50a3-474f-a963-7ca011c97500",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.get(url, apiVersion, null);
                let serializationData = {  responseTypeMetadata: TestInterfaces.TypeInfo.TestAutomationRunSlice, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(deserializedResult);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

    /**
    * @param {TestInterfaces.TestAutomationRunSlice} sliceDetails
    */
    public async updateSlice(
        sliceDetails: TestInterfaces.TestAutomationRunSlice
        ): Promise<void> {

        return new Promise<void>(async (resolve, reject) => {
            
            let routeValues: any = {
            };

            try {
                let verData: vsom.ClientVersioningData = await this.vsoClient.getVersioningData(
                    "3.1-preview.1",
                    "Test",
                    "575891b2-50a3-474f-a963-7ca011c97500",
                    routeValues);

                let url: string = verData.requestUrl;
                let apiVersion: string = verData.apiVersion;
                
                let res: restm.IRestClientResponse = await this.restClient.update(url, apiVersion, sliceDetails, null);
                let serializationData = { requestTypeMetadata: TestInterfaces.TypeInfo.TestAutomationRunSlice, responseIsCollection: false };
                let deserializedResult = serm.ContractSerializer.serialize(res.result, serializationData, true);
                resolve(null);
                
            }
            catch (err) {
                reject(err);
            }
        });
    }

}
