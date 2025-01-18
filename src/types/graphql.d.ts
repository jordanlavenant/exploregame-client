import { Prisma } from "@prisma/client"
import { MergePrismaWithSdlTypes, MakeRelationsOptional } from '@redwoodjs/api'
import { Script as PrismaScript, Location as PrismaLocation, Step as PrismaStep, ScriptStep as PrismaScriptStep, Department as PrismaDepartment, QuestionType as PrismaQuestionType, Question as PrismaQuestion, Answer as PrismaAnswer, HintLevel as PrismaHintLevel, Hint as PrismaHint, User as PrismaUser, Gender as PrismaGender, Player as PrismaPlayer, PlayerScript as PrismaPlayerScript } from '@prisma/client'
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { RedwoodGraphQLContext } from '@redwoodjs/graphql-server/dist/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ResolverFn<TResult, TParent, TContext, TArgs> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
export type OptArgsResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args?: TArgs,
      obj?: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>

    export type RequiredResolverFn<TResult, TParent = {}, TContext = {}, TArgs = {}> = (
      args: TArgs,
      obj: { root: TParent; context: TContext; info: GraphQLResolveInfo }
    ) => TResult | Promise<TResult>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Byte: Buffer;
  Date: Date | string;
  DateTime: Date | string;
  File: File;
  JSON: Prisma.JsonValue;
  JSONObject: Prisma.JsonObject;
  Time: Date | string;
};

export type Answer = {
  __typename?: 'Answer';
  Question: Question;
  answer: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  questionId: Scalars['String'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  player: Player;
  token: Scalars['String'];
};

export type CreateAnswerInput = {
  answer: Scalars['String'];
  description: Scalars['String'];
  questionId: Scalars['String'];
};

export type CreateDepartmentInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreateGenderInput = {
  gender: Scalars['String'];
};

export type CreateHintInput = {
  help: Scalars['String'];
  hintLevelId: Scalars['String'];
  questionId: Scalars['String'];
};

export type CreateHintLevelInput = {
  type: Scalars['String'];
};

export type CreateLocationInput = {
  description: Scalars['String'];
  name: Scalars['String'];
};

export type CreatePlayerInput = {
  departmentId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  genderId: Scalars['String'];
  hashedPassword: Scalars['String'];
  lastName: Scalars['String'];
};

export type CreatePlayerScriptInput = {
  playerId: Scalars['String'];
  remainingTime: Scalars['Int'];
  score: Scalars['Int'];
  scriptId: Scalars['String'];
};

export type CreateQuestionInput = {
  description: Scalars['String'];
  question: Scalars['String'];
  questionTypeId: Scalars['String'];
  stepId: Scalars['String'];
};

export type CreateQuestionTypeInput = {
  type: Scalars['String'];
};

export type CreateScriptInput = {
  departmentId: Scalars['String'];
  name: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type CreateScriptStepInput = {
  lettre: Scalars['String'];
  scriptId: Scalars['String'];
  stepId: Scalars['String'];
};

export type CreateStepInput = {
  locationId: Scalars['String'];
  name: Scalars['String'];
};

export type CreateUserInput = {
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  resetToken?: InputMaybe<Scalars['String']>;
  resetTokenExpiresAt?: InputMaybe<Scalars['DateTime']>;
  salt: Scalars['String'];
};

export type Department = {
  __typename?: 'Department';
  Player: Array<Maybe<Player>>;
  Script: Array<Maybe<Script>>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Gender = {
  __typename?: 'Gender';
  Player: Array<Maybe<Player>>;
  gender: Scalars['String'];
  id: Scalars['String'];
};

export type Hint = {
  __typename?: 'Hint';
  HintLevel: HintLevel;
  Question: Question;
  help: Scalars['String'];
  hintLevelId: Scalars['String'];
  id: Scalars['String'];
  questionId: Scalars['String'];
};

export type HintLevel = {
  __typename?: 'HintLevel';
  Hint: Array<Maybe<Hint>>;
  id: Scalars['String'];
  type: Scalars['String'];
};

export type Location = {
  __typename?: 'Location';
  Step: Array<Maybe<Step>>;
  description: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
};

export type LoginPlayerInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnswer: Answer;
  createDepartment: Department;
  createGender: Gender;
  createHint: Hint;
  createHintLevel: HintLevel;
  createLocation: Location;
  createPlayer: Player;
  createPlayerScript: PlayerScript;
  createQuestion: Question;
  createQuestionType: QuestionType;
  createScript: Script;
  createScriptStep: ScriptStep;
  createStep: Step;
  createUser: User;
  deleteAnswer: Answer;
  deleteDepartment: Department;
  deleteGender: Gender;
  deleteHint: Hint;
  deleteHintLevel: HintLevel;
  deleteLocation: Location;
  deletePlayer: Player;
  deletePlayerScript: PlayerScript;
  deleteQuestion: Question;
  deleteQuestionType: QuestionType;
  deleteScript: Script;
  deleteScriptStep: ScriptStep;
  deleteStep: Step;
  deleteUser: User;
  loginPlayer: AuthPayload;
  updateAnswer: Answer;
  updateDepartment: Department;
  updateGender: Gender;
  updateHint: Hint;
  updateHintLevel: HintLevel;
  updateLocation: Location;
  updatePlayer: Player;
  updatePlayerScript: PlayerScript;
  updateQuestion: Question;
  updateQuestionType: QuestionType;
  updateScript: Script;
  updateScriptStep: ScriptStep;
  updateStep: Step;
  updateUser: User;
};


export type MutationcreateAnswerArgs = {
  input: CreateAnswerInput;
};


export type MutationcreateDepartmentArgs = {
  input: CreateDepartmentInput;
};


export type MutationcreateGenderArgs = {
  input: CreateGenderInput;
};


export type MutationcreateHintArgs = {
  input: CreateHintInput;
};


export type MutationcreateHintLevelArgs = {
  input: CreateHintLevelInput;
};


export type MutationcreateLocationArgs = {
  input: CreateLocationInput;
};


export type MutationcreatePlayerArgs = {
  input: CreatePlayerInput;
};


export type MutationcreatePlayerScriptArgs = {
  input: CreatePlayerScriptInput;
};


export type MutationcreateQuestionArgs = {
  input: CreateQuestionInput;
};


export type MutationcreateQuestionTypeArgs = {
  input: CreateQuestionTypeInput;
};


export type MutationcreateScriptArgs = {
  input: CreateScriptInput;
};


export type MutationcreateScriptStepArgs = {
  input: CreateScriptStepInput;
};


export type MutationcreateStepArgs = {
  input: CreateStepInput;
};


export type MutationcreateUserArgs = {
  input: CreateUserInput;
};


export type MutationdeleteAnswerArgs = {
  id: Scalars['String'];
};


export type MutationdeleteDepartmentArgs = {
  id: Scalars['String'];
};


export type MutationdeleteGenderArgs = {
  id: Scalars['String'];
};


export type MutationdeleteHintArgs = {
  id: Scalars['String'];
};


export type MutationdeleteHintLevelArgs = {
  id: Scalars['String'];
};


export type MutationdeleteLocationArgs = {
  id: Scalars['String'];
};


export type MutationdeletePlayerArgs = {
  id: Scalars['String'];
};


export type MutationdeletePlayerScriptArgs = {
  id: Scalars['String'];
};


export type MutationdeleteQuestionArgs = {
  id: Scalars['String'];
};


export type MutationdeleteQuestionTypeArgs = {
  id: Scalars['String'];
};


export type MutationdeleteScriptArgs = {
  id: Scalars['String'];
};


export type MutationdeleteScriptStepArgs = {
  id: Scalars['String'];
};


export type MutationdeleteStepArgs = {
  id: Scalars['String'];
};


export type MutationdeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationloginPlayerArgs = {
  input: LoginPlayerInput;
};


export type MutationupdateAnswerArgs = {
  id: Scalars['String'];
  input: UpdateAnswerInput;
};


export type MutationupdateDepartmentArgs = {
  id: Scalars['String'];
  input: UpdateDepartmentInput;
};


export type MutationupdateGenderArgs = {
  id: Scalars['String'];
  input: UpdateGenderInput;
};


export type MutationupdateHintArgs = {
  id: Scalars['String'];
  input: UpdateHintInput;
};


export type MutationupdateHintLevelArgs = {
  id: Scalars['String'];
  input: UpdateHintLevelInput;
};


export type MutationupdateLocationArgs = {
  id: Scalars['String'];
  input: UpdateLocationInput;
};


export type MutationupdatePlayerArgs = {
  id: Scalars['String'];
  input: UpdatePlayerInput;
};


export type MutationupdatePlayerScriptArgs = {
  id: Scalars['String'];
  input: UpdatePlayerScriptInput;
};


export type MutationupdateQuestionArgs = {
  id: Scalars['String'];
  input: UpdateQuestionInput;
};


export type MutationupdateQuestionTypeArgs = {
  id: Scalars['String'];
  input: UpdateQuestionTypeInput;
};


export type MutationupdateScriptArgs = {
  id: Scalars['String'];
  input: UpdateScriptInput;
};


export type MutationupdateScriptStepArgs = {
  id: Scalars['String'];
  input: UpdateScriptStepInput;
};


export type MutationupdateStepArgs = {
  id: Scalars['String'];
  input: UpdateStepInput;
};


export type MutationupdateUserArgs = {
  id: Scalars['String'];
  input: UpdateUserInput;
};

export type Player = {
  __typename?: 'Player';
  Department: Department;
  Gender: Gender;
  PlayerScript: Array<Maybe<PlayerScript>>;
  departmentId: Scalars['String'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  genderId: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
};

export type PlayerScript = {
  __typename?: 'PlayerScript';
  Player: Player;
  Script: Script;
  id: Scalars['String'];
  playerId: Scalars['String'];
  remainingTime: Scalars['Int'];
  score: Scalars['Int'];
  scriptId: Scalars['String'];
};

/** About the Redwood queries. */
export type Query = {
  __typename?: 'Query';
  answer?: Maybe<Answer>;
  answers: Array<Answer>;
  department?: Maybe<Department>;
  departments: Array<Department>;
  gender?: Maybe<Gender>;
  genders: Array<Gender>;
  hint?: Maybe<Hint>;
  hintLevel?: Maybe<HintLevel>;
  hintLevels: Array<HintLevel>;
  hints: Array<Hint>;
  location?: Maybe<Location>;
  locations: Array<Location>;
  player?: Maybe<Player>;
  playerScript?: Maybe<PlayerScript>;
  playerScripts: Array<PlayerScript>;
  players: Array<Player>;
  question?: Maybe<Question>;
  questionType?: Maybe<QuestionType>;
  questionTypes: Array<QuestionType>;
  questions: Array<Question>;
  /** Fetches the Redwood root schema. */
  redwood?: Maybe<Redwood>;
  script?: Maybe<Script>;
  scriptStep?: Maybe<ScriptStep>;
  scriptSteps: Array<ScriptStep>;
  scripts: Array<Script>;
  step?: Maybe<Step>;
  steps: Array<Step>;
  user?: Maybe<User>;
  users: Array<User>;
};


/** About the Redwood queries. */
export type QueryanswerArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QuerydepartmentArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QuerygenderArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryhintArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryhintLevelArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QuerylocationArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryplayerArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryplayerScriptArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryquestionArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryquestionTypeArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryscriptArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryscriptStepArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QuerystepArgs = {
  id: Scalars['String'];
};


/** About the Redwood queries. */
export type QueryuserArgs = {
  id: Scalars['String'];
};

export type Question = {
  __typename?: 'Question';
  Answer: Array<Maybe<Answer>>;
  Hint: Array<Maybe<Hint>>;
  QuestionType: QuestionType;
  Step: Step;
  description: Scalars['String'];
  id: Scalars['String'];
  question: Scalars['String'];
  questionTypeId: Scalars['String'];
  stepId: Scalars['String'];
};

export type QuestionType = {
  __typename?: 'QuestionType';
  Question: Array<Maybe<Question>>;
  id: Scalars['String'];
  type: Scalars['String'];
};

/**
 * The RedwoodJS Root Schema
 *
 * Defines details about RedwoodJS such as the current user and version information.
 */
export type Redwood = {
  __typename?: 'Redwood';
  /** The current user. */
  currentUser?: Maybe<Scalars['JSON']>;
  /** The version of Prisma. */
  prismaVersion?: Maybe<Scalars['String']>;
  /** The version of Redwood. */
  version?: Maybe<Scalars['String']>;
};

export type Script = {
  __typename?: 'Script';
  Department: Department;
  PlayerScript: Array<Maybe<PlayerScript>>;
  ScriptStep: Array<Maybe<ScriptStep>>;
  departmentId: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  visible: Scalars['Boolean'];
};

export type ScriptStep = {
  __typename?: 'ScriptStep';
  Script: Script;
  Step: Step;
  id: Scalars['String'];
  lettre: Scalars['String'];
  scriptId: Scalars['String'];
  stepId: Scalars['String'];
};

export type Step = {
  __typename?: 'Step';
  Location: Location;
  Questions: Array<Maybe<Question>>;
  ScriptStep: Array<Maybe<ScriptStep>>;
  id: Scalars['String'];
  locationId: Scalars['String'];
  name: Scalars['String'];
};

export type UpdateAnswerInput = {
  answer?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
};

export type UpdateDepartmentInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateGenderInput = {
  gender?: InputMaybe<Scalars['String']>;
};

export type UpdateHintInput = {
  help?: InputMaybe<Scalars['String']>;
  hintLevelId?: InputMaybe<Scalars['String']>;
  questionId?: InputMaybe<Scalars['String']>;
};

export type UpdateHintLevelInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateLocationInput = {
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdatePlayerInput = {
  departmentId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  genderId?: InputMaybe<Scalars['String']>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdatePlayerScriptInput = {
  playerId?: InputMaybe<Scalars['String']>;
  remainingTime?: InputMaybe<Scalars['Int']>;
  score?: InputMaybe<Scalars['Int']>;
  scriptId?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionInput = {
  description?: InputMaybe<Scalars['String']>;
  question?: InputMaybe<Scalars['String']>;
  questionTypeId?: InputMaybe<Scalars['String']>;
  stepId?: InputMaybe<Scalars['String']>;
};

export type UpdateQuestionTypeInput = {
  type?: InputMaybe<Scalars['String']>;
};

export type UpdateScriptInput = {
  departmentId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  visible?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateScriptStepInput = {
  lettre?: InputMaybe<Scalars['String']>;
  scriptId?: InputMaybe<Scalars['String']>;
  stepId?: InputMaybe<Scalars['String']>;
};

export type UpdateStepInput = {
  locationId?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']>;
  hashedPassword?: InputMaybe<Scalars['String']>;
  resetToken?: InputMaybe<Scalars['String']>;
  resetTokenExpiresAt?: InputMaybe<Scalars['DateTime']>;
  salt?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  hashedPassword: Scalars['String'];
  id: Scalars['String'];
  resetToken?: Maybe<Scalars['String']>;
  resetTokenExpiresAt?: Maybe<Scalars['DateTime']>;
  salt: Scalars['String'];
};

type MaybeOrArrayOfMaybe<T> = T | Maybe<T> | Maybe<T>[];
type AllMappedModels = MaybeOrArrayOfMaybe<Answer | Department | Gender | Hint | HintLevel | Location | Player | PlayerScript | Question | QuestionType | Script | ScriptStep | Step | User>


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Answer: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaAnswer, MakeRelationsOptional<Answer, AllMappedModels>, AllMappedModels>>;
  AuthPayload: ResolverTypeWrapper<Omit<AuthPayload, 'player'> & { player: ResolversTypes['Player'] }>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Byte: ResolverTypeWrapper<Scalars['Byte']>;
  CreateAnswerInput: CreateAnswerInput;
  CreateDepartmentInput: CreateDepartmentInput;
  CreateGenderInput: CreateGenderInput;
  CreateHintInput: CreateHintInput;
  CreateHintLevelInput: CreateHintLevelInput;
  CreateLocationInput: CreateLocationInput;
  CreatePlayerInput: CreatePlayerInput;
  CreatePlayerScriptInput: CreatePlayerScriptInput;
  CreateQuestionInput: CreateQuestionInput;
  CreateQuestionTypeInput: CreateQuestionTypeInput;
  CreateScriptInput: CreateScriptInput;
  CreateScriptStepInput: CreateScriptStepInput;
  CreateStepInput: CreateStepInput;
  CreateUserInput: CreateUserInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Department: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaDepartment, MakeRelationsOptional<Department, AllMappedModels>, AllMappedModels>>;
  File: ResolverTypeWrapper<Scalars['File']>;
  Gender: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaGender, MakeRelationsOptional<Gender, AllMappedModels>, AllMappedModels>>;
  Hint: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaHint, MakeRelationsOptional<Hint, AllMappedModels>, AllMappedModels>>;
  HintLevel: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaHintLevel, MakeRelationsOptional<HintLevel, AllMappedModels>, AllMappedModels>>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  JSONObject: ResolverTypeWrapper<Scalars['JSONObject']>;
  Location: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaLocation, MakeRelationsOptional<Location, AllMappedModels>, AllMappedModels>>;
  LoginPlayerInput: LoginPlayerInput;
  Mutation: ResolverTypeWrapper<{}>;
  Player: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaPlayer, MakeRelationsOptional<Player, AllMappedModels>, AllMappedModels>>;
  PlayerScript: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaPlayerScript, MakeRelationsOptional<PlayerScript, AllMappedModels>, AllMappedModels>>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaQuestion, MakeRelationsOptional<Question, AllMappedModels>, AllMappedModels>>;
  QuestionType: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaQuestionType, MakeRelationsOptional<QuestionType, AllMappedModels>, AllMappedModels>>;
  Redwood: ResolverTypeWrapper<Redwood>;
  Script: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaScript, MakeRelationsOptional<Script, AllMappedModels>, AllMappedModels>>;
  ScriptStep: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaScriptStep, MakeRelationsOptional<ScriptStep, AllMappedModels>, AllMappedModels>>;
  Step: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaStep, MakeRelationsOptional<Step, AllMappedModels>, AllMappedModels>>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
  UpdateAnswerInput: UpdateAnswerInput;
  UpdateDepartmentInput: UpdateDepartmentInput;
  UpdateGenderInput: UpdateGenderInput;
  UpdateHintInput: UpdateHintInput;
  UpdateHintLevelInput: UpdateHintLevelInput;
  UpdateLocationInput: UpdateLocationInput;
  UpdatePlayerInput: UpdatePlayerInput;
  UpdatePlayerScriptInput: UpdatePlayerScriptInput;
  UpdateQuestionInput: UpdateQuestionInput;
  UpdateQuestionTypeInput: UpdateQuestionTypeInput;
  UpdateScriptInput: UpdateScriptInput;
  UpdateScriptStepInput: UpdateScriptStepInput;
  UpdateStepInput: UpdateStepInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<MergePrismaWithSdlTypes<PrismaUser, MakeRelationsOptional<User, AllMappedModels>, AllMappedModels>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Answer: MergePrismaWithSdlTypes<PrismaAnswer, MakeRelationsOptional<Answer, AllMappedModels>, AllMappedModels>;
  AuthPayload: Omit<AuthPayload, 'player'> & { player: ResolversParentTypes['Player'] };
  BigInt: Scalars['BigInt'];
  Boolean: Scalars['Boolean'];
  Byte: Scalars['Byte'];
  CreateAnswerInput: CreateAnswerInput;
  CreateDepartmentInput: CreateDepartmentInput;
  CreateGenderInput: CreateGenderInput;
  CreateHintInput: CreateHintInput;
  CreateHintLevelInput: CreateHintLevelInput;
  CreateLocationInput: CreateLocationInput;
  CreatePlayerInput: CreatePlayerInput;
  CreatePlayerScriptInput: CreatePlayerScriptInput;
  CreateQuestionInput: CreateQuestionInput;
  CreateQuestionTypeInput: CreateQuestionTypeInput;
  CreateScriptInput: CreateScriptInput;
  CreateScriptStepInput: CreateScriptStepInput;
  CreateStepInput: CreateStepInput;
  CreateUserInput: CreateUserInput;
  Date: Scalars['Date'];
  DateTime: Scalars['DateTime'];
  Department: MergePrismaWithSdlTypes<PrismaDepartment, MakeRelationsOptional<Department, AllMappedModels>, AllMappedModels>;
  File: Scalars['File'];
  Gender: MergePrismaWithSdlTypes<PrismaGender, MakeRelationsOptional<Gender, AllMappedModels>, AllMappedModels>;
  Hint: MergePrismaWithSdlTypes<PrismaHint, MakeRelationsOptional<Hint, AllMappedModels>, AllMappedModels>;
  HintLevel: MergePrismaWithSdlTypes<PrismaHintLevel, MakeRelationsOptional<HintLevel, AllMappedModels>, AllMappedModels>;
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  JSONObject: Scalars['JSONObject'];
  Location: MergePrismaWithSdlTypes<PrismaLocation, MakeRelationsOptional<Location, AllMappedModels>, AllMappedModels>;
  LoginPlayerInput: LoginPlayerInput;
  Mutation: {};
  Player: MergePrismaWithSdlTypes<PrismaPlayer, MakeRelationsOptional<Player, AllMappedModels>, AllMappedModels>;
  PlayerScript: MergePrismaWithSdlTypes<PrismaPlayerScript, MakeRelationsOptional<PlayerScript, AllMappedModels>, AllMappedModels>;
  Query: {};
  Question: MergePrismaWithSdlTypes<PrismaQuestion, MakeRelationsOptional<Question, AllMappedModels>, AllMappedModels>;
  QuestionType: MergePrismaWithSdlTypes<PrismaQuestionType, MakeRelationsOptional<QuestionType, AllMappedModels>, AllMappedModels>;
  Redwood: Redwood;
  Script: MergePrismaWithSdlTypes<PrismaScript, MakeRelationsOptional<Script, AllMappedModels>, AllMappedModels>;
  ScriptStep: MergePrismaWithSdlTypes<PrismaScriptStep, MakeRelationsOptional<ScriptStep, AllMappedModels>, AllMappedModels>;
  Step: MergePrismaWithSdlTypes<PrismaStep, MakeRelationsOptional<Step, AllMappedModels>, AllMappedModels>;
  String: Scalars['String'];
  Time: Scalars['Time'];
  UpdateAnswerInput: UpdateAnswerInput;
  UpdateDepartmentInput: UpdateDepartmentInput;
  UpdateGenderInput: UpdateGenderInput;
  UpdateHintInput: UpdateHintInput;
  UpdateHintLevelInput: UpdateHintLevelInput;
  UpdateLocationInput: UpdateLocationInput;
  UpdatePlayerInput: UpdatePlayerInput;
  UpdatePlayerScriptInput: UpdatePlayerScriptInput;
  UpdateQuestionInput: UpdateQuestionInput;
  UpdateQuestionTypeInput: UpdateQuestionTypeInput;
  UpdateScriptInput: UpdateScriptInput;
  UpdateScriptStepInput: UpdateScriptStepInput;
  UpdateStepInput: UpdateStepInput;
  UpdateUserInput: UpdateUserInput;
  User: MergePrismaWithSdlTypes<PrismaUser, MakeRelationsOptional<User, AllMappedModels>, AllMappedModels>;
};

export type requireAuthDirectiveArgs = {
  roles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type requireAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = requireAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type skipAuthDirectiveArgs = { };

export type skipAuthDirectiveResolver<Result, Parent, ContextType = RedwoodGraphQLContext, Args = skipAuthDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AnswerResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = {
  Question: OptArgsResolverFn<ResolversTypes['Question'], ParentType, ContextType>;
  answer: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  questionId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AnswerRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = {
  Question?: RequiredResolverFn<ResolversTypes['Question'], ParentType, ContextType>;
  answer?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  questionId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  player: OptArgsResolverFn<ResolversTypes['Player'], ParentType, ContextType>;
  token: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  player?: RequiredResolverFn<ResolversTypes['Player'], ParentType, ContextType>;
  token?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type DepartmentResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  Player: OptArgsResolverFn<Array<Maybe<ResolversTypes['Player']>>, ParentType, ContextType>;
  Script: OptArgsResolverFn<Array<Maybe<ResolversTypes['Script']>>, ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DepartmentRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Department'] = ResolversParentTypes['Department']> = {
  Player?: RequiredResolverFn<Array<Maybe<ResolversTypes['Player']>>, ParentType, ContextType>;
  Script?: RequiredResolverFn<Array<Maybe<ResolversTypes['Script']>>, ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface FileScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['File'], any> {
  name: 'File';
}

export type GenderResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Gender'] = ResolversParentTypes['Gender']> = {
  Player: OptArgsResolverFn<Array<Maybe<ResolversTypes['Player']>>, ParentType, ContextType>;
  gender: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenderRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Gender'] = ResolversParentTypes['Gender']> = {
  Player?: RequiredResolverFn<Array<Maybe<ResolversTypes['Player']>>, ParentType, ContextType>;
  gender?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HintResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Hint'] = ResolversParentTypes['Hint']> = {
  HintLevel: OptArgsResolverFn<ResolversTypes['HintLevel'], ParentType, ContextType>;
  Question: OptArgsResolverFn<ResolversTypes['Question'], ParentType, ContextType>;
  help: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  hintLevelId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  questionId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HintRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Hint'] = ResolversParentTypes['Hint']> = {
  HintLevel?: RequiredResolverFn<ResolversTypes['HintLevel'], ParentType, ContextType>;
  Question?: RequiredResolverFn<ResolversTypes['Question'], ParentType, ContextType>;
  help?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  hintLevelId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  questionId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HintLevelResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['HintLevel'] = ResolversParentTypes['HintLevel']> = {
  Hint: OptArgsResolverFn<Array<Maybe<ResolversTypes['Hint']>>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  type: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HintLevelRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['HintLevel'] = ResolversParentTypes['HintLevel']> = {
  Hint?: RequiredResolverFn<Array<Maybe<ResolversTypes['Hint']>>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  type?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export interface JSONObjectScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSONObject'], any> {
  name: 'JSONObject';
}

export type LocationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  Step: OptArgsResolverFn<Array<Maybe<ResolversTypes['Step']>>, ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LocationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']> = {
  Step?: RequiredResolverFn<Array<Maybe<ResolversTypes['Step']>>, ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAnswer: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationcreateAnswerArgs, 'input'>>;
  createDepartment: Resolver<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationcreateDepartmentArgs, 'input'>>;
  createGender: Resolver<ResolversTypes['Gender'], ParentType, ContextType, RequireFields<MutationcreateGenderArgs, 'input'>>;
  createHint: Resolver<ResolversTypes['Hint'], ParentType, ContextType, RequireFields<MutationcreateHintArgs, 'input'>>;
  createHintLevel: Resolver<ResolversTypes['HintLevel'], ParentType, ContextType, RequireFields<MutationcreateHintLevelArgs, 'input'>>;
  createLocation: Resolver<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationcreateLocationArgs, 'input'>>;
  createPlayer: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationcreatePlayerArgs, 'input'>>;
  createPlayerScript: Resolver<ResolversTypes['PlayerScript'], ParentType, ContextType, RequireFields<MutationcreatePlayerScriptArgs, 'input'>>;
  createQuestion: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationcreateQuestionArgs, 'input'>>;
  createQuestionType: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationcreateQuestionTypeArgs, 'input'>>;
  createScript: Resolver<ResolversTypes['Script'], ParentType, ContextType, RequireFields<MutationcreateScriptArgs, 'input'>>;
  createScriptStep: Resolver<ResolversTypes['ScriptStep'], ParentType, ContextType, RequireFields<MutationcreateScriptStepArgs, 'input'>>;
  createStep: Resolver<ResolversTypes['Step'], ParentType, ContextType, RequireFields<MutationcreateStepArgs, 'input'>>;
  createUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
  deleteAnswer: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationdeleteAnswerArgs, 'id'>>;
  deleteDepartment: Resolver<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationdeleteDepartmentArgs, 'id'>>;
  deleteGender: Resolver<ResolversTypes['Gender'], ParentType, ContextType, RequireFields<MutationdeleteGenderArgs, 'id'>>;
  deleteHint: Resolver<ResolversTypes['Hint'], ParentType, ContextType, RequireFields<MutationdeleteHintArgs, 'id'>>;
  deleteHintLevel: Resolver<ResolversTypes['HintLevel'], ParentType, ContextType, RequireFields<MutationdeleteHintLevelArgs, 'id'>>;
  deleteLocation: Resolver<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationdeleteLocationArgs, 'id'>>;
  deletePlayer: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationdeletePlayerArgs, 'id'>>;
  deletePlayerScript: Resolver<ResolversTypes['PlayerScript'], ParentType, ContextType, RequireFields<MutationdeletePlayerScriptArgs, 'id'>>;
  deleteQuestion: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationdeleteQuestionArgs, 'id'>>;
  deleteQuestionType: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationdeleteQuestionTypeArgs, 'id'>>;
  deleteScript: Resolver<ResolversTypes['Script'], ParentType, ContextType, RequireFields<MutationdeleteScriptArgs, 'id'>>;
  deleteScriptStep: Resolver<ResolversTypes['ScriptStep'], ParentType, ContextType, RequireFields<MutationdeleteScriptStepArgs, 'id'>>;
  deleteStep: Resolver<ResolversTypes['Step'], ParentType, ContextType, RequireFields<MutationdeleteStepArgs, 'id'>>;
  deleteUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  loginPlayer: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationloginPlayerArgs, 'input'>>;
  updateAnswer: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationupdateAnswerArgs, 'id' | 'input'>>;
  updateDepartment: Resolver<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationupdateDepartmentArgs, 'id' | 'input'>>;
  updateGender: Resolver<ResolversTypes['Gender'], ParentType, ContextType, RequireFields<MutationupdateGenderArgs, 'id' | 'input'>>;
  updateHint: Resolver<ResolversTypes['Hint'], ParentType, ContextType, RequireFields<MutationupdateHintArgs, 'id' | 'input'>>;
  updateHintLevel: Resolver<ResolversTypes['HintLevel'], ParentType, ContextType, RequireFields<MutationupdateHintLevelArgs, 'id' | 'input'>>;
  updateLocation: Resolver<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationupdateLocationArgs, 'id' | 'input'>>;
  updatePlayer: Resolver<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationupdatePlayerArgs, 'id' | 'input'>>;
  updatePlayerScript: Resolver<ResolversTypes['PlayerScript'], ParentType, ContextType, RequireFields<MutationupdatePlayerScriptArgs, 'id' | 'input'>>;
  updateQuestion: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationupdateQuestionArgs, 'id' | 'input'>>;
  updateQuestionType: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationupdateQuestionTypeArgs, 'id' | 'input'>>;
  updateScript: Resolver<ResolversTypes['Script'], ParentType, ContextType, RequireFields<MutationupdateScriptArgs, 'id' | 'input'>>;
  updateScriptStep: Resolver<ResolversTypes['ScriptStep'], ParentType, ContextType, RequireFields<MutationupdateScriptStepArgs, 'id' | 'input'>>;
  updateStep: Resolver<ResolversTypes['Step'], ParentType, ContextType, RequireFields<MutationupdateStepArgs, 'id' | 'input'>>;
  updateUser: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'input'>>;
};

export type MutationRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createAnswer?: RequiredResolverFn<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationcreateAnswerArgs, 'input'>>;
  createDepartment?: RequiredResolverFn<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationcreateDepartmentArgs, 'input'>>;
  createGender?: RequiredResolverFn<ResolversTypes['Gender'], ParentType, ContextType, RequireFields<MutationcreateGenderArgs, 'input'>>;
  createHint?: RequiredResolverFn<ResolversTypes['Hint'], ParentType, ContextType, RequireFields<MutationcreateHintArgs, 'input'>>;
  createHintLevel?: RequiredResolverFn<ResolversTypes['HintLevel'], ParentType, ContextType, RequireFields<MutationcreateHintLevelArgs, 'input'>>;
  createLocation?: RequiredResolverFn<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationcreateLocationArgs, 'input'>>;
  createPlayer?: RequiredResolverFn<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationcreatePlayerArgs, 'input'>>;
  createPlayerScript?: RequiredResolverFn<ResolversTypes['PlayerScript'], ParentType, ContextType, RequireFields<MutationcreatePlayerScriptArgs, 'input'>>;
  createQuestion?: RequiredResolverFn<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationcreateQuestionArgs, 'input'>>;
  createQuestionType?: RequiredResolverFn<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationcreateQuestionTypeArgs, 'input'>>;
  createScript?: RequiredResolverFn<ResolversTypes['Script'], ParentType, ContextType, RequireFields<MutationcreateScriptArgs, 'input'>>;
  createScriptStep?: RequiredResolverFn<ResolversTypes['ScriptStep'], ParentType, ContextType, RequireFields<MutationcreateScriptStepArgs, 'input'>>;
  createStep?: RequiredResolverFn<ResolversTypes['Step'], ParentType, ContextType, RequireFields<MutationcreateStepArgs, 'input'>>;
  createUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationcreateUserArgs, 'input'>>;
  deleteAnswer?: RequiredResolverFn<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationdeleteAnswerArgs, 'id'>>;
  deleteDepartment?: RequiredResolverFn<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationdeleteDepartmentArgs, 'id'>>;
  deleteGender?: RequiredResolverFn<ResolversTypes['Gender'], ParentType, ContextType, RequireFields<MutationdeleteGenderArgs, 'id'>>;
  deleteHint?: RequiredResolverFn<ResolversTypes['Hint'], ParentType, ContextType, RequireFields<MutationdeleteHintArgs, 'id'>>;
  deleteHintLevel?: RequiredResolverFn<ResolversTypes['HintLevel'], ParentType, ContextType, RequireFields<MutationdeleteHintLevelArgs, 'id'>>;
  deleteLocation?: RequiredResolverFn<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationdeleteLocationArgs, 'id'>>;
  deletePlayer?: RequiredResolverFn<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationdeletePlayerArgs, 'id'>>;
  deletePlayerScript?: RequiredResolverFn<ResolversTypes['PlayerScript'], ParentType, ContextType, RequireFields<MutationdeletePlayerScriptArgs, 'id'>>;
  deleteQuestion?: RequiredResolverFn<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationdeleteQuestionArgs, 'id'>>;
  deleteQuestionType?: RequiredResolverFn<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationdeleteQuestionTypeArgs, 'id'>>;
  deleteScript?: RequiredResolverFn<ResolversTypes['Script'], ParentType, ContextType, RequireFields<MutationdeleteScriptArgs, 'id'>>;
  deleteScriptStep?: RequiredResolverFn<ResolversTypes['ScriptStep'], ParentType, ContextType, RequireFields<MutationdeleteScriptStepArgs, 'id'>>;
  deleteStep?: RequiredResolverFn<ResolversTypes['Step'], ParentType, ContextType, RequireFields<MutationdeleteStepArgs, 'id'>>;
  deleteUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationdeleteUserArgs, 'id'>>;
  loginPlayer?: RequiredResolverFn<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationloginPlayerArgs, 'input'>>;
  updateAnswer?: RequiredResolverFn<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationupdateAnswerArgs, 'id' | 'input'>>;
  updateDepartment?: RequiredResolverFn<ResolversTypes['Department'], ParentType, ContextType, RequireFields<MutationupdateDepartmentArgs, 'id' | 'input'>>;
  updateGender?: RequiredResolverFn<ResolversTypes['Gender'], ParentType, ContextType, RequireFields<MutationupdateGenderArgs, 'id' | 'input'>>;
  updateHint?: RequiredResolverFn<ResolversTypes['Hint'], ParentType, ContextType, RequireFields<MutationupdateHintArgs, 'id' | 'input'>>;
  updateHintLevel?: RequiredResolverFn<ResolversTypes['HintLevel'], ParentType, ContextType, RequireFields<MutationupdateHintLevelArgs, 'id' | 'input'>>;
  updateLocation?: RequiredResolverFn<ResolversTypes['Location'], ParentType, ContextType, RequireFields<MutationupdateLocationArgs, 'id' | 'input'>>;
  updatePlayer?: RequiredResolverFn<ResolversTypes['Player'], ParentType, ContextType, RequireFields<MutationupdatePlayerArgs, 'id' | 'input'>>;
  updatePlayerScript?: RequiredResolverFn<ResolversTypes['PlayerScript'], ParentType, ContextType, RequireFields<MutationupdatePlayerScriptArgs, 'id' | 'input'>>;
  updateQuestion?: RequiredResolverFn<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationupdateQuestionArgs, 'id' | 'input'>>;
  updateQuestionType?: RequiredResolverFn<ResolversTypes['QuestionType'], ParentType, ContextType, RequireFields<MutationupdateQuestionTypeArgs, 'id' | 'input'>>;
  updateScript?: RequiredResolverFn<ResolversTypes['Script'], ParentType, ContextType, RequireFields<MutationupdateScriptArgs, 'id' | 'input'>>;
  updateScriptStep?: RequiredResolverFn<ResolversTypes['ScriptStep'], ParentType, ContextType, RequireFields<MutationupdateScriptStepArgs, 'id' | 'input'>>;
  updateStep?: RequiredResolverFn<ResolversTypes['Step'], ParentType, ContextType, RequireFields<MutationupdateStepArgs, 'id' | 'input'>>;
  updateUser?: RequiredResolverFn<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationupdateUserArgs, 'id' | 'input'>>;
};

export type PlayerResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  Department: OptArgsResolverFn<ResolversTypes['Department'], ParentType, ContextType>;
  Gender: OptArgsResolverFn<ResolversTypes['Gender'], ParentType, ContextType>;
  PlayerScript: OptArgsResolverFn<Array<Maybe<ResolversTypes['PlayerScript']>>, ParentType, ContextType>;
  departmentId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  firstName: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  genderId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  hashedPassword: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  lastName: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Player'] = ResolversParentTypes['Player']> = {
  Department?: RequiredResolverFn<ResolversTypes['Department'], ParentType, ContextType>;
  Gender?: RequiredResolverFn<ResolversTypes['Gender'], ParentType, ContextType>;
  PlayerScript?: RequiredResolverFn<Array<Maybe<ResolversTypes['PlayerScript']>>, ParentType, ContextType>;
  departmentId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  genderId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  hashedPassword?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerScriptResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['PlayerScript'] = ResolversParentTypes['PlayerScript']> = {
  Player: OptArgsResolverFn<ResolversTypes['Player'], ParentType, ContextType>;
  Script: OptArgsResolverFn<ResolversTypes['Script'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  playerId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  remainingTime: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  score: OptArgsResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  scriptId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerScriptRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['PlayerScript'] = ResolversParentTypes['PlayerScript']> = {
  Player?: RequiredResolverFn<ResolversTypes['Player'], ParentType, ContextType>;
  Script?: RequiredResolverFn<ResolversTypes['Script'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  playerId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  remainingTime?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  score?: RequiredResolverFn<ResolversTypes['Int'], ParentType, ContextType>;
  scriptId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  answer: Resolver<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<QueryanswerArgs, 'id'>>;
  answers: OptArgsResolverFn<Array<ResolversTypes['Answer']>, ParentType, ContextType>;
  department: Resolver<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QuerydepartmentArgs, 'id'>>;
  departments: OptArgsResolverFn<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  gender: Resolver<Maybe<ResolversTypes['Gender']>, ParentType, ContextType, RequireFields<QuerygenderArgs, 'id'>>;
  genders: OptArgsResolverFn<Array<ResolversTypes['Gender']>, ParentType, ContextType>;
  hint: Resolver<Maybe<ResolversTypes['Hint']>, ParentType, ContextType, RequireFields<QueryhintArgs, 'id'>>;
  hintLevel: Resolver<Maybe<ResolversTypes['HintLevel']>, ParentType, ContextType, RequireFields<QueryhintLevelArgs, 'id'>>;
  hintLevels: OptArgsResolverFn<Array<ResolversTypes['HintLevel']>, ParentType, ContextType>;
  hints: OptArgsResolverFn<Array<ResolversTypes['Hint']>, ParentType, ContextType>;
  location: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QuerylocationArgs, 'id'>>;
  locations: OptArgsResolverFn<Array<ResolversTypes['Location']>, ParentType, ContextType>;
  player: Resolver<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryplayerArgs, 'id'>>;
  playerScript: Resolver<Maybe<ResolversTypes['PlayerScript']>, ParentType, ContextType, RequireFields<QueryplayerScriptArgs, 'id'>>;
  playerScripts: OptArgsResolverFn<Array<ResolversTypes['PlayerScript']>, ParentType, ContextType>;
  players: OptArgsResolverFn<Array<ResolversTypes['Player']>, ParentType, ContextType>;
  question: Resolver<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryquestionArgs, 'id'>>;
  questionType: Resolver<Maybe<ResolversTypes['QuestionType']>, ParentType, ContextType, RequireFields<QueryquestionTypeArgs, 'id'>>;
  questionTypes: OptArgsResolverFn<Array<ResolversTypes['QuestionType']>, ParentType, ContextType>;
  questions: OptArgsResolverFn<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  redwood: OptArgsResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  script: Resolver<Maybe<ResolversTypes['Script']>, ParentType, ContextType, RequireFields<QueryscriptArgs, 'id'>>;
  scriptStep: Resolver<Maybe<ResolversTypes['ScriptStep']>, ParentType, ContextType, RequireFields<QueryscriptStepArgs, 'id'>>;
  scriptSteps: OptArgsResolverFn<Array<ResolversTypes['ScriptStep']>, ParentType, ContextType>;
  scripts: OptArgsResolverFn<Array<ResolversTypes['Script']>, ParentType, ContextType>;
  step: Resolver<Maybe<ResolversTypes['Step']>, ParentType, ContextType, RequireFields<QuerystepArgs, 'id'>>;
  steps: OptArgsResolverFn<Array<ResolversTypes['Step']>, ParentType, ContextType>;
  user: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users: OptArgsResolverFn<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QueryRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  answer?: RequiredResolverFn<Maybe<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<QueryanswerArgs, 'id'>>;
  answers?: RequiredResolverFn<Array<ResolversTypes['Answer']>, ParentType, ContextType>;
  department?: RequiredResolverFn<Maybe<ResolversTypes['Department']>, ParentType, ContextType, RequireFields<QuerydepartmentArgs, 'id'>>;
  departments?: RequiredResolverFn<Array<ResolversTypes['Department']>, ParentType, ContextType>;
  gender?: RequiredResolverFn<Maybe<ResolversTypes['Gender']>, ParentType, ContextType, RequireFields<QuerygenderArgs, 'id'>>;
  genders?: RequiredResolverFn<Array<ResolversTypes['Gender']>, ParentType, ContextType>;
  hint?: RequiredResolverFn<Maybe<ResolversTypes['Hint']>, ParentType, ContextType, RequireFields<QueryhintArgs, 'id'>>;
  hintLevel?: RequiredResolverFn<Maybe<ResolversTypes['HintLevel']>, ParentType, ContextType, RequireFields<QueryhintLevelArgs, 'id'>>;
  hintLevels?: RequiredResolverFn<Array<ResolversTypes['HintLevel']>, ParentType, ContextType>;
  hints?: RequiredResolverFn<Array<ResolversTypes['Hint']>, ParentType, ContextType>;
  location?: RequiredResolverFn<Maybe<ResolversTypes['Location']>, ParentType, ContextType, RequireFields<QuerylocationArgs, 'id'>>;
  locations?: RequiredResolverFn<Array<ResolversTypes['Location']>, ParentType, ContextType>;
  player?: RequiredResolverFn<Maybe<ResolversTypes['Player']>, ParentType, ContextType, RequireFields<QueryplayerArgs, 'id'>>;
  playerScript?: RequiredResolverFn<Maybe<ResolversTypes['PlayerScript']>, ParentType, ContextType, RequireFields<QueryplayerScriptArgs, 'id'>>;
  playerScripts?: RequiredResolverFn<Array<ResolversTypes['PlayerScript']>, ParentType, ContextType>;
  players?: RequiredResolverFn<Array<ResolversTypes['Player']>, ParentType, ContextType>;
  question?: RequiredResolverFn<Maybe<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryquestionArgs, 'id'>>;
  questionType?: RequiredResolverFn<Maybe<ResolversTypes['QuestionType']>, ParentType, ContextType, RequireFields<QueryquestionTypeArgs, 'id'>>;
  questionTypes?: RequiredResolverFn<Array<ResolversTypes['QuestionType']>, ParentType, ContextType>;
  questions?: RequiredResolverFn<Array<ResolversTypes['Question']>, ParentType, ContextType>;
  redwood?: RequiredResolverFn<Maybe<ResolversTypes['Redwood']>, ParentType, ContextType>;
  script?: RequiredResolverFn<Maybe<ResolversTypes['Script']>, ParentType, ContextType, RequireFields<QueryscriptArgs, 'id'>>;
  scriptStep?: RequiredResolverFn<Maybe<ResolversTypes['ScriptStep']>, ParentType, ContextType, RequireFields<QueryscriptStepArgs, 'id'>>;
  scriptSteps?: RequiredResolverFn<Array<ResolversTypes['ScriptStep']>, ParentType, ContextType>;
  scripts?: RequiredResolverFn<Array<ResolversTypes['Script']>, ParentType, ContextType>;
  step?: RequiredResolverFn<Maybe<ResolversTypes['Step']>, ParentType, ContextType, RequireFields<QuerystepArgs, 'id'>>;
  steps?: RequiredResolverFn<Array<ResolversTypes['Step']>, ParentType, ContextType>;
  user?: RequiredResolverFn<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  users?: RequiredResolverFn<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QuestionResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  Answer: OptArgsResolverFn<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  Hint: OptArgsResolverFn<Array<Maybe<ResolversTypes['Hint']>>, ParentType, ContextType>;
  QuestionType: OptArgsResolverFn<ResolversTypes['QuestionType'], ParentType, ContextType>;
  Step: OptArgsResolverFn<ResolversTypes['Step'], ParentType, ContextType>;
  description: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  question: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  questionTypeId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  stepId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  Answer?: RequiredResolverFn<Array<Maybe<ResolversTypes['Answer']>>, ParentType, ContextType>;
  Hint?: RequiredResolverFn<Array<Maybe<ResolversTypes['Hint']>>, ParentType, ContextType>;
  QuestionType?: RequiredResolverFn<ResolversTypes['QuestionType'], ParentType, ContextType>;
  Step?: RequiredResolverFn<ResolversTypes['Step'], ParentType, ContextType>;
  description?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  question?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  questionTypeId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  stepId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionTypeResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['QuestionType'] = ResolversParentTypes['QuestionType']> = {
  Question: OptArgsResolverFn<Array<Maybe<ResolversTypes['Question']>>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  type: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QuestionTypeRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['QuestionType'] = ResolversParentTypes['QuestionType']> = {
  Question?: RequiredResolverFn<Array<Maybe<ResolversTypes['Question']>>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  type?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser: OptArgsResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RedwoodRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Redwood'] = ResolversParentTypes['Redwood']> = {
  currentUser?: RequiredResolverFn<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  prismaVersion?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  version?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScriptResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Script'] = ResolversParentTypes['Script']> = {
  Department: OptArgsResolverFn<ResolversTypes['Department'], ParentType, ContextType>;
  PlayerScript: OptArgsResolverFn<Array<Maybe<ResolversTypes['PlayerScript']>>, ParentType, ContextType>;
  ScriptStep: OptArgsResolverFn<Array<Maybe<ResolversTypes['ScriptStep']>>, ParentType, ContextType>;
  departmentId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  visible: OptArgsResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScriptRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Script'] = ResolversParentTypes['Script']> = {
  Department?: RequiredResolverFn<ResolversTypes['Department'], ParentType, ContextType>;
  PlayerScript?: RequiredResolverFn<Array<Maybe<ResolversTypes['PlayerScript']>>, ParentType, ContextType>;
  ScriptStep?: RequiredResolverFn<Array<Maybe<ResolversTypes['ScriptStep']>>, ParentType, ContextType>;
  departmentId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  visible?: RequiredResolverFn<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScriptStepResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ScriptStep'] = ResolversParentTypes['ScriptStep']> = {
  Script: OptArgsResolverFn<ResolversTypes['Script'], ParentType, ContextType>;
  Step: OptArgsResolverFn<ResolversTypes['Step'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  lettre: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  scriptId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  stepId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ScriptStepRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['ScriptStep'] = ResolversParentTypes['ScriptStep']> = {
  Script?: RequiredResolverFn<ResolversTypes['Script'], ParentType, ContextType>;
  Step?: RequiredResolverFn<ResolversTypes['Step'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  lettre?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  scriptId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  stepId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Step'] = ResolversParentTypes['Step']> = {
  Location: OptArgsResolverFn<ResolversTypes['Location'], ParentType, ContextType>;
  Questions: OptArgsResolverFn<Array<Maybe<ResolversTypes['Question']>>, ParentType, ContextType>;
  ScriptStep: OptArgsResolverFn<Array<Maybe<ResolversTypes['ScriptStep']>>, ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  locationId: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StepRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['Step'] = ResolversParentTypes['Step']> = {
  Location?: RequiredResolverFn<ResolversTypes['Location'], ParentType, ContextType>;
  Questions?: RequiredResolverFn<Array<Maybe<ResolversTypes['Question']>>, ParentType, ContextType>;
  ScriptStep?: RequiredResolverFn<Array<Maybe<ResolversTypes['ScriptStep']>>, ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  locationId?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  name?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Time'], any> {
  name: 'Time';
}

export type UserResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  hashedPassword: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  resetToken: OptArgsResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resetTokenExpiresAt: OptArgsResolverFn<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  salt: OptArgsResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserRelationResolvers<ContextType = RedwoodGraphQLContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  hashedPassword?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  id?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  resetToken?: RequiredResolverFn<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  resetTokenExpiresAt?: RequiredResolverFn<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  salt?: RequiredResolverFn<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = RedwoodGraphQLContext> = {
  Answer: AnswerResolvers<ContextType>;
  AuthPayload: AuthPayloadResolvers<ContextType>;
  BigInt: GraphQLScalarType;
  Byte: GraphQLScalarType;
  Date: GraphQLScalarType;
  DateTime: GraphQLScalarType;
  Department: DepartmentResolvers<ContextType>;
  File: GraphQLScalarType;
  Gender: GenderResolvers<ContextType>;
  Hint: HintResolvers<ContextType>;
  HintLevel: HintLevelResolvers<ContextType>;
  JSON: GraphQLScalarType;
  JSONObject: GraphQLScalarType;
  Location: LocationResolvers<ContextType>;
  Mutation: MutationResolvers<ContextType>;
  Player: PlayerResolvers<ContextType>;
  PlayerScript: PlayerScriptResolvers<ContextType>;
  Query: QueryResolvers<ContextType>;
  Question: QuestionResolvers<ContextType>;
  QuestionType: QuestionTypeResolvers<ContextType>;
  Redwood: RedwoodResolvers<ContextType>;
  Script: ScriptResolvers<ContextType>;
  ScriptStep: ScriptStepResolvers<ContextType>;
  Step: StepResolvers<ContextType>;
  Time: GraphQLScalarType;
  User: UserResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = RedwoodGraphQLContext> = {
  requireAuth: requireAuthDirectiveResolver<any, any, ContextType>;
  skipAuth: skipAuthDirectiveResolver<any, any, ContextType>;
};
