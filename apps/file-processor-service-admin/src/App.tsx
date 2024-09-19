import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AgentProcessingFileList } from "./agentProcessingFile/AgentProcessingFileList";
import { AgentProcessingFileCreate } from "./agentProcessingFile/AgentProcessingFileCreate";
import { AgentProcessingFileEdit } from "./agentProcessingFile/AgentProcessingFileEdit";
import { AgentProcessingFileShow } from "./agentProcessingFile/AgentProcessingFileShow";
import { CaseModelList } from "./caseModel/CaseModelList";
import { CaseModelCreate } from "./caseModel/CaseModelCreate";
import { CaseModelEdit } from "./caseModel/CaseModelEdit";
import { CaseModelShow } from "./caseModel/CaseModelShow";
import { AchTransactionList } from "./achTransaction/AchTransactionList";
import { AchTransactionCreate } from "./achTransaction/AchTransactionCreate";
import { AchTransactionEdit } from "./achTransaction/AchTransactionEdit";
import { AchTransactionShow } from "./achTransaction/AchTransactionShow";
import { FileTemplateList } from "./fileTemplate/FileTemplateList";
import { FileTemplateCreate } from "./fileTemplate/FileTemplateCreate";
import { FileTemplateEdit } from "./fileTemplate/FileTemplateEdit";
import { FileTemplateShow } from "./fileTemplate/FileTemplateShow";
import { FinanceAccountingFileList } from "./financeAccountingFile/FinanceAccountingFileList";
import { FinanceAccountingFileCreate } from "./financeAccountingFile/FinanceAccountingFileCreate";
import { FinanceAccountingFileEdit } from "./financeAccountingFile/FinanceAccountingFileEdit";
import { FinanceAccountingFileShow } from "./financeAccountingFile/FinanceAccountingFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"FileProcessorService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AgentProcessingFile"
          list={AgentProcessingFileList}
          edit={AgentProcessingFileEdit}
          create={AgentProcessingFileCreate}
          show={AgentProcessingFileShow}
        />
        <Resource
          name="CaseModel"
          list={CaseModelList}
          edit={CaseModelEdit}
          create={CaseModelCreate}
          show={CaseModelShow}
        />
        <Resource
          name="AchTransaction"
          list={AchTransactionList}
          edit={AchTransactionEdit}
          create={AchTransactionCreate}
          show={AchTransactionShow}
        />
        <Resource
          name="FileTemplate"
          list={FileTemplateList}
          edit={FileTemplateEdit}
          create={FileTemplateCreate}
          show={FileTemplateShow}
        />
        <Resource
          name="FinanceAccountingFile"
          list={FinanceAccountingFileList}
          edit={FinanceAccountingFileEdit}
          create={FinanceAccountingFileCreate}
          show={FinanceAccountingFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
